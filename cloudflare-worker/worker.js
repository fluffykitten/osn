/**
 * Cloudflare Worker: OSN Kimia Mastery Mailer & R2 Storage Relay
 * Menangani pengiriman email notifikasi dan penyimpanan berkas/diagram Cloudflare R2
 * Dapat dijalankan pada subdomain gratis Cloudflare Workers (*.workers.dev) TANPA CUSTOM DOMAIN.
 */

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const ALLOWED_MIME_TYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'image/gif': 'gif',
  'application/pdf': 'pdf',
};

const ALLOWED_CATEGORIES = ['diagrams', 'questions', 'materials', 'avatars', 'general'];

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Category, X-Filename',
  };
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
    },
  });
}

function sanitizeCategory(rawCategory) {
  const cat = (rawCategory || 'diagrams').toLowerCase().trim();
  return ALLOWED_CATEGORIES.includes(cat) ? cat : 'diagrams';
}

function sanitizeFilename(originalName) {
  if (!originalName) return 'file';
  return originalName
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

async function handleStorageUpload(request, env) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed. Gunakan POST untuk upload.' }, 405);
  }

  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse(
      {
        error: 'R2 Bucket (STORAGE_BUCKET) belum di-binding pada Cloudflare Worker.',
        hint: 'Pastikan bucket "osn-storage" telah ditautkan di wrangler.toml / Dashboard Workers.',
      },
      503
    );
  }

  const contentType = request.headers.get('content-type') || '';
  const url = new URL(request.url);

  let fileBuffer = null;
  let fileMime = '';
  let originalFilename = '';
  let category = sanitizeCategory(request.headers.get('x-category') || url.searchParams.get('category'));

  if (contentType.includes('multipart/form-data')) {
    try {
      const formData = await request.formData();
      const fileEntry = formData.get('file');

      if (!fileEntry || typeof fileEntry === 'string') {
        return jsonResponse({ error: 'Field "file" wajib disertakan dalam form-data.' }, 400);
      }

      if (formData.get('category')) {
        category = sanitizeCategory(formData.get('category'));
      }

      originalFilename = fileEntry.name || 'diagram';
      fileMime = fileEntry.type || 'application/octet-stream';
      fileBuffer = await fileEntry.arrayBuffer();
    } catch (err) {
      return jsonResponse({ error: `Gagal membaca form-data: ${err.message}` }, 400);
    }
  } else {
    originalFilename = request.headers.get('x-filename') || 'diagram';
    fileMime = contentType.split(';')[0].trim().toLowerCase();
    fileBuffer = await request.arrayBuffer();
  }

  if (!fileBuffer || fileBuffer.byteLength === 0) {
    return jsonResponse({ error: 'Berkas kosong atau tidak dapat dibaca.' }, 400);
  }

  if (fileBuffer.byteLength > MAX_FILE_SIZE) {
    return jsonResponse(
      {
        error: `Ukuran berkas (${(fileBuffer.byteLength / (1024 * 1024)).toFixed(2)} MB) melebihi batas maksimum 10 MB.`,
      },
      413
    );
  }

  const ext = ALLOWED_MIME_TYPES[fileMime];
  if (!ext) {
    return jsonResponse(
      {
        error: `Tipe berkas "${fileMime}" tidak didukung. Format yang diperbolehkan: PNG, JPEG, WEBP, SVG, GIF, PDF.`,
      },
      415
    );
  }

  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 9);
  const cleanName = sanitizeFilename(originalFilename.replace(/\.[^/.]+$/, ''));
  const storageKey = `${category}/${timestamp}-${cleanName}-${randomId}.${ext}`;

  try {
    await bucket.put(storageKey, fileBuffer, {
      httpMetadata: {
        contentType: fileMime,
        cacheControl: 'public, max-age=31536000, immutable',
      },
      customMetadata: {
        originalName: originalFilename,
        category,
        uploadedAt: new Date().toISOString(),
        fileSize: String(fileBuffer.byteLength),
      },
    });

    const publicUrl = `${url.origin}/api/storage/file/${storageKey}`;

    return jsonResponse({
      success: true,
      url: publicUrl,
      key: storageKey,
      filename: originalFilename,
      size: fileBuffer.byteLength,
      contentType: fileMime,
      category,
      uploadedAt: new Date().toISOString(),
    });
  } catch (err) {
    return jsonResponse({ error: `Gagal menyimpan berkas ke Cloudflare R2: ${err.message}` }, 500);
  }
}

async function handleStorageGet(request, env, storageKey) {
  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse({ error: 'R2 Bucket tidak terkonfigurasi.' }, 503);
  }

  if (!storageKey) {
    return jsonResponse({ error: 'Kunci berkas (storage key) tidak diberikan.' }, 400);
  }

  try {
    const object = await bucket.get(storageKey);
    if (!object) {
      return jsonResponse({ error: `Berkas "${storageKey}" tidak ditemukan di storage.` }, 404);
    }

    const clientEtag = request.headers.get('if-none-match');
    if (clientEtag && clientEtag === object.httpEtag) {
      return new Response(null, {
        status: 304,
        headers: {
          ...corsHeaders(),
          ETag: object.httpEtag,
        },
      });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('ETag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(object.body, { headers });
  } catch (err) {
    return jsonResponse({ error: `Gagal mengambil berkas dari R2: ${err.message}` }, 500);
  }
}

async function handleStorageDelete(request, env, storageKey) {
  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse({ error: 'R2 Bucket tidak terkonfigurasi.' }, 503);
  }

  if (!storageKey) {
    return jsonResponse({ error: 'Kunci berkas tidak diberikan.' }, 400);
  }

  try {
    await bucket.delete(storageKey);
    return jsonResponse({
      success: true,
      message: `Berkas "${storageKey}" berhasil dihapus dari Cloudflare R2.`,
      key: storageKey,
    });
  } catch (err) {
    return jsonResponse({ error: `Gagal menghapus berkas: ${err.message}` }, 500);
  }
}

async function handleStorageList(request, env) {
  const bucket = env.STORAGE_BUCKET;
  if (!bucket) {
    return jsonResponse({ error: 'R2 Bucket tidak terkonfigurasi.' }, 503);
  }

  const url = new URL(request.url);
  const prefix = url.searchParams.get('prefix') || '';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 100);

  try {
    const listed = await bucket.list({ prefix, limit });
    const objects = listed.objects.map((obj) => ({
      key: obj.key,
      size: obj.size,
      uploadedAt: obj.uploaded.toISOString(),
      httpEtag: obj.httpEtag,
      url: `${url.origin}/api/storage/file/${obj.key}`,
      customMetadata: obj.customMetadata || {},
    }));

    return jsonResponse({
      success: true,
      objects,
      truncated: listed.truncated,
      cursor: listed.cursor,
    });
  } catch (err) {
    return jsonResponse({ error: `Gagal membaca daftar berkas dari R2: ${err.message}` }, 500);
  }
}

async function handleNotify(request, env) {
  try {
    const body = await request.json();
    const { action, student, adminEmail } = body;

    if (action !== 'student_registered' || !student) {
      return jsonResponse({ error: 'Action not supported or student data missing' }, 400);
    }

    const recipientAdmin = adminEmail || env.ADMIN_EMAIL || 'fluffykitten.dev@gmail.com';
    const studentEmail = student.email;
    const studentName = student.fullName || 'Calon Medalis';
    const schoolName = student.schoolName || 'Tidak Disebutkan';
    const gradeLevel = student.gradeLevel || 'Kelas 10/11/12';
    const targetOlympiad = student.targetOlympiad || 'OSK';
    const phoneWhatsapp = student.phoneWhatsApp || '-';
    const registeredAt = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    const resendApiKey = env.RESEND_API_KEY;
    const brevoApiKey = env.BREVO_API_KEY;
    const senderName = env.SENDER_NAME || 'OSN Kimia Mastery';
    const senderEmail = env.SENDER_EMAIL || 'onboarding@resend.dev';

    const adminHtmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #0284c7; padding-bottom: 10px;">🎓 Pendaftaran Siswa Baru - OSN Kimia</h2>
        <p><strong>Nama:</strong> ${studentName}</p>
        <p><strong>Email:</strong> ${studentEmail}</p>
        <p><strong>Sekolah:</strong> ${schoolName}</p>
        <p><strong>Kelas:</strong> ${gradeLevel}</p>
        <p><strong>Target:</strong> ${targetOlympiad}</p>
        <p><strong>WA:</strong> ${phoneWhatsapp}</p>
        <p><strong>Waktu:</strong> ${registeredAt} WIB</p>
      </div>
    `;

    const studentHtmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #0284c7;">Selamat Datang di OSN Kimia Mastery!</h2>
        <p>Halo <strong>${studentName}</strong>, akun belajarmu telah aktif.</p>
        <p>Silakan bergabung ke kelas binaan gurumu menggunakan kode kelas untuk membuka seluruh materi kurikulum dan bank soal.</p>
      </div>
    `;

    const dispatchResult = { brevoSent: false, resendSent: false };

    if (brevoApiKey) {
      try {
        const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { name: senderName, email: senderEmail },
            to: [{ email: recipientAdmin }],
            subject: `[OSN Kimia] Pendaftaran Siswa Baru: ${studentName}`,
            htmlContent: adminHtmlContent,
          }),
        });
        dispatchResult.brevoSent = brevoRes.ok;
      } catch (_) {}
    }

    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: `${senderName} <${senderEmail}>`,
            to: [recipientAdmin],
            subject: `[OSN Kimia] Pendaftaran Siswa Baru: ${studentName}`,
            html: adminHtmlContent,
          }),
        });
        dispatchResult.resendSent = resendRes.ok;
      } catch (_) {}
    }

    return jsonResponse({ success: true, message: 'Notifikasi diproses.', details: dispatchResult });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 500);
  }
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    if (request.method === 'GET' && (pathname === '/' || pathname === '/health' || pathname === '/api/health')) {
      return jsonResponse({
        status: 'ok',
        service: 'OSN Kimia Mastery Mailer & R2 Storage Worker',
        hasStorageBucket: Boolean(env.STORAGE_BUCKET),
        timestamp: new Date().toISOString(),
      });
    }

    if (pathname === '/notify' || pathname === '/api/notify') {
      return handleNotify(request, env);
    }

    if (pathname === '/api/storage/upload' || pathname === '/storage/upload') {
      return handleStorageUpload(request, env);
    }

    if (request.method === 'GET' && (pathname === '/api/storage/list' || pathname === '/storage/list')) {
      return handleStorageList(request, env);
    }

    const filePrefix = pathname.startsWith('/api/storage/file/')
      ? '/api/storage/file/'
      : pathname.startsWith('/storage/file/')
      ? '/storage/file/'
      : null;

    if (filePrefix) {
      const storageKey = decodeURIComponent(pathname.substring(filePrefix.length));
      if (request.method === 'GET') {
        return handleStorageGet(request, env, storageKey);
      }
      if (request.method === 'DELETE') {
        return handleStorageDelete(request, env, storageKey);
      }
    }

    return jsonResponse({ error: 'Endpoint not found' }, 404);
  },
};
