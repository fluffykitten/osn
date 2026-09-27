/**
 * bugReportService.ts
 * Layanan terpadu pelaporan bug kontekstual untuk OSN Kimia.
 * Mendukung penyimpanan ke Supabase, sinkronisasi cadangan lokal (LocalStorage),
 * manajemen status pelaporan untuk Admin, serta ekspor Prompt AI (Antigravity ready),
 * Markdown, JSON, dan CSV.
 */

import { getSupabaseClient } from '../lib/supabaseClient';
import type { BugReport, BugStatus } from '../types/database';
import { getSuspectedSourceFiles } from '../utils/clientErrorCollector';

const LOCAL_BUG_REPORTS_KEY = 'osn_bug_reports_v1';

function getLocalReports(): BugReport[] {
  try {
    const raw = localStorage.getItem(LOCAL_BUG_REPORTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('[BugReportService] Gagal membaca local storage:', err);
    return [];
  }
}

function saveLocalReports(reports: BugReport[]): void {
  try {
    localStorage.setItem(LOCAL_BUG_REPORTS_KEY, JSON.stringify(reports));
  } catch (err) {
    console.warn('[BugReportService] Gagal menyimpan ke local storage:', err);
  }
}

export const bugReportService = {
  /**
   * Mengirimkan laporan bug baru dari pengguna.
   */
  async createBugReport(
    payload: Omit<BugReport, 'id' | 'created_at' | 'status'> & { id?: string; status?: BugStatus }
  ): Promise<{ success: boolean; data?: BugReport; error?: string }> {
    const reportId = payload.id || `BUG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const now = new Date().toISOString();

    const fullReport: BugReport = {
      ...payload,
      id: reportId,
      status: payload.status || 'open',
      created_at: now,
      updated_at: now,
    };

    // Selalu simpan ke local storage agar cadangan aman seketika
    const localList = getLocalReports();
    localList.unshift(fullReport);
    saveLocalReports(localList);

    // Kirim ke Supabase jika klien aktif
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { error } = await supabase.from('bug_reports').insert([fullReport]);
        if (error) {
          console.warn('[BugReportService] Gagal simpan ke Supabase, laporan tersimpan lokal:', error.message);
        }
      } catch (e: any) {
        console.warn('[BugReportService] Exception saat simpan ke Supabase:', e?.message || e);
      }
    }

    return { success: true, data: fullReport };
  },

  /**
   * Mengambil daftar laporan bug untuk Dashboard Admin.
   */
  async getBugReports(): Promise<BugReport[]> {
    const localList = getLocalReports();
    const supabase = getSupabaseClient();

    if (!supabase) {
      return localList;
    }

    try {
      const { data, error } = await supabase
        .from('bug_reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('[BugReportService] Error mengambil data dari Supabase:', error.message);
        return localList;
      }

      if (data && Array.isArray(data)) {
        // Gabungkan dengan data lokal jika ada laporan offline yang belum tersinkron
        const remoteIds = new Set(data.map((d: any) => d.id));
        const unsyncedLocal = localList.filter((l) => !remoteIds.has(l.id));

        const combined = [...unsyncedLocal, ...(data as BugReport[])];
        // Perbarui local cache
        saveLocalReports(combined);
        return combined;
      }
    } catch (err) {
      console.warn('[BugReportService] Gagal fetch laporan dari cloud:', err);
    }

    return localList;
  },

  /**
   * Memperbarui status penanganan laporan (Open / In Progress / Resolved / Closed).
   */
  async updateBugReportStatus(
    id: string,
    status: BugStatus,
    adminNotes?: string,
    resolvedBy?: string
  ): Promise<boolean> {
    const now = new Date().toISOString();

    // Update LocalStorage
    const localList = getLocalReports();
    const targetIdx = localList.findIndex((item) => item.id === id);
    if (targetIdx !== -1) {
      localList[targetIdx] = {
        ...localList[targetIdx],
        status,
        ...(adminNotes !== undefined ? { admin_notes: adminNotes } : {}),
        ...(status === 'resolved'
          ? { resolved_at: now, resolved_by: resolvedBy || 'Admin' }
          : {}),
        updated_at: now,
      };
      saveLocalReports(localList);
    }

    // Update Supabase
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const updatePayload: Record<string, any> = {
          status,
          updated_at: now,
        };
        if (adminNotes !== undefined) updatePayload.admin_notes = adminNotes;
        if (status === 'resolved') {
          updatePayload.resolved_at = now;
          updatePayload.resolved_by = resolvedBy || 'Admin';
        }

        const { error } = await supabase.from('bug_reports').update(updatePayload).eq('id', id);
        if (error) console.warn('[BugReportService] Gagal update status di cloud:', error.message);
      } catch (err) {
        console.warn('[BugReportService] Exception update status:', err);
      }
    }

    return true;
  },

  /**
   * Menghapus laporan bug.
   */
  async deleteBugReport(id: string): Promise<boolean> {
    const localList = getLocalReports().filter((item) => item.id !== id);
    saveLocalReports(localList);

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('bug_reports').delete().eq('id', id);
      } catch (err) {
        console.warn('[BugReportService] Exception delete:', err);
      }
    }

    return true;
  },

  /**
   * Menghasilkan teks instruksi terstruktur untuk AI (Antigravity Prompt).
   * Didesain agar pengguna cukup 1-klik salin dan langsung menempelkannya ke chat AI.
   */
  generateAiFixPrompt(reportOrList: BugReport | BugReport[]): string {
    const reports = Array.isArray(reportOrList) ? reportOrList : [reportOrList];

    if (reports.length === 0) {
      return 'Tidak ada laporan bug yang dipilih.';
    }

    if (reports.length === 1) {
      const bug = reports[0];
      const suspectedFiles = getSuspectedSourceFiles(bug.page_url);

      return `Halo Antigravity, mohon bantu perbaiki bug yang dilaporkan pengguna pada aplikasi web OSN Kimia berikut:

### 📋 IDENTITAS & LOKASI BUG
- **ID Laporan**: \`${bug.id}\`
- **Judul Masalah**: **${bug.title}**
- **Tingkat Keparahan**: \`${bug.severity.toUpperCase()}\`
- **Kategori**: \`${bug.category}\`
- **Halaman / Rute URL**: \`${bug.page_url}\` (Judul Dokumen: "${bug.page_title || 'N/A'}")
- **Bagian Halaman (Section)**: \`${bug.section}\`
- **Dugaan Berkas Sumber Terkait**:
${suspectedFiles.map((f) => `  - \`${f}\``).join('\n')}

### 👤 INFORMASI PENGGUNA & PERANGKAT
- **Pelapor**: ${bug.reporter_name || 'Tamu / Anonim'} (${bug.reporter_email || 'Tanpa email'})
- **Peran Akun**: \`${bug.reporter_role || 'guest'}\`
- **Resolusi Layar / Viewport**: ${
        bug.viewport ? `${bug.viewport.width} x ${bug.viewport.height} px` : 'N/A'
      }
- **User Agent**: \`${bug.user_agent || 'N/A'}\`

### 🔍 DESKRIPSI KENDALA
**Apa yang Terjadi**:
> ${bug.description.replace(/\n/g, '\n> ')}

**Perilaku yang Diharapkan**:
> ${bug.expected_behavior ? bug.expected_behavior.replace(/\n/g, '\n> ') : 'Perilaku normal tanpa kendala.'}

${
  bug.steps_to_reproduce
    ? `**Langkah Reproduksi**:\n> ${bug.steps_to_reproduce.replace(/\n/g, '\n> ')}\n`
    : ''
}
${
  bug.admin_notes
    ? `**Catatan Tambahan Admin**:\n> ${bug.admin_notes.replace(/\n/g, '\n> ')}\n`
    : ''
}

### 🚨 REKAMAN CONSOLE ERROR (BROWSER LOGS)
${
  bug.recent_logs && bug.recent_logs.length > 0
    ? '```json\n' + JSON.stringify(bug.recent_logs, null, 2) + '\n```'
    : '_Tidak ada error JavaScript fatal yang terdeteksi di konsol saat pelaporan._'
}

${
  bug.screenshot_data
    ? `### 🖼️ TANGKAPAN LAYAR (ATTACHMENT)
Dilampirkan tangkapan layar (${bug.screenshot_data.startsWith('data:') ? 'Tersedia data base64' : bug.screenshot_data}).`
    : ''
}

---
### 🛠️ INSTRUKSI PERBAIKAN UNTUK ANDA:
1. Analisis dugaan penyebab bug pada berkas sumber terkait yang disebutkan di atas.
2. Periksa konsistensi state, styling, atau logika perhitungan/rendering yang relevan.
3. Buat perbaikan kode yang rapi, pertahankan fitur yang sudah berjalan, dan pastikan tidak ada error kompilasi/tipe.`;
    }

    // Format untuk Batch / Banyak Laporan Bug Sekaligus
    const header = `# DAFTAR LOG LAPORAN BUG UNTUK DIPERBAIKI (TOTAL: ${reports.length})\n\nHalo Antigravity, berikut adalah ${reports.length} laporan bug dari pengguna web OSN Kimia. Mohon perbaiki kendala-kendala berikut secara terstruktur:\n\n`;

    const body = reports
      .map((bug, idx) => {
        const suspectedFiles = getSuspectedSourceFiles(bug.page_url);
        return `## ${idx + 1}. [${bug.severity.toUpperCase()}] ${bug.title} (\`${bug.id}\`)
- **Status**: \`${bug.status}\` | **Kategori**: \`${bug.category}\`
- **Rute URL**: \`${bug.page_url}\` | **Bagian**: \`${bug.section}\`
- **Dugaan Berkas**: ${suspectedFiles.map((f) => `\`${f}\``).join(', ')}
- **Deskripsi Masalah**: ${bug.description}
- **Yang Diharapkan**: ${bug.expected_behavior || 'Normal'}
${
  bug.recent_logs && bug.recent_logs.length > 0
    ? `- **Error Terakhir**: \`${bug.recent_logs[bug.recent_logs.length - 1].message}\``
    : ''
}
`;
      })
      .join('\n---\n\n');

    return header + body;
  },

  /**
   * Mengunduh berkas Markdown (.md) yang berisi prompt AI.
   */
  exportAsMarkdown(reports: BugReport[], filename = 'osn_bug_reports_for_ai.md'): void {
    const content = this.generateAiFixPrompt(reports);
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  /**
   * Mengunduh seluruh log laporan dalam format JSON mentah.
   */
  exportAsJson(reports: BugReport[], filename = 'osn_bug_reports.json'): void {
    const content = JSON.stringify(reports, null, 2);
    const blob = new Blob([content], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  /**
   * Mengunduh log laporan dalam format CSV (bisa dibuka di Excel / Google Sheets).
   */
  exportAsCsv(reports: BugReport[], filename = 'osn_bug_reports.csv'): void {
    const headers = [
      'ID',
      'Status',
      'Severity',
      'Category',
      'Title',
      'Section',
      'Page URL',
      'Reporter Email',
      'Reporter Role',
      'Description',
      'Expected Behavior',
      'Created At',
    ];

    const escapeCsv = (val?: string) => {
      if (!val) return '""';
      const clean = String(val).replace(/"/g, '""');
      return `"${clean}"`;
    };

    const rows = reports.map((r) => [
      escapeCsv(r.id),
      escapeCsv(r.status),
      escapeCsv(r.severity),
      escapeCsv(r.category),
      escapeCsv(r.title),
      escapeCsv(r.section),
      escapeCsv(r.page_url),
      escapeCsv(r.reporter_email),
      escapeCsv(r.reporter_role),
      escapeCsv(r.description),
      escapeCsv(r.expected_behavior),
      escapeCsv(r.created_at),
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },
};
