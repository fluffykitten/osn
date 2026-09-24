/**
 * classroomService.ts
 * Layanan manajemen kelas binaan, undangan email siswa, dan penugasan worksheet.
 * Terhubung ke tabel Supabase (classrooms, classroom_members, classroom_assignments)
 * dengan failover lokal jika koneksi Supabase terputus.
 */

import { getSupabaseClient } from '../lib/supabaseClient';
import type {
  Classroom,
  ClassroomMember,
  ClassroomAssignment,
  Worksheet,
  JoinClassroomResult,
  ClassroomMemberStatus,
} from '../types/database';

const LOCAL_CLASSROOMS_KEY = 'osn_local_classrooms_store';
const LOCAL_MEMBERS_KEY = 'osn_local_members_store';
const LOCAL_ASSIGNMENTS_KEY = 'osn_local_assignments_store';

class ClassroomService {
  private localClassrooms: Classroom[] = [];
  private localMembers: ClassroomMember[] = [];
  private localAssignments: ClassroomAssignment[] = [];

  constructor() {
    this.initLocalStore();
  }

  private initLocalStore(): void {
    try {
      const cls = localStorage.getItem(LOCAL_CLASSROOMS_KEY);
      if (cls) {
        this.localClassrooms = JSON.parse(cls);
      } else {
        // Seed contoh kelas default untuk pengalaman interaktif langsung
        this.localClassrooms = [
          {
            id: 1,
            teacher_id: 'teacher-demo-uuid',
            name: 'Pelatnas OSN Kimia 2026',
            code: 'PELATNAS-26',
            description: 'Kelas pembinaan intensif persiapan OSN Tingkat Nasional dan Seleksi IChO.',
            created_at: new Date().toISOString(),
            member_count: 1,
            assignment_count: 2,
          },
        ];
      }

      const mem = localStorage.getItem(LOCAL_MEMBERS_KEY);
      if (mem) {
        this.localMembers = JSON.parse(mem);
      } else {
        // Seed default siswa@gmail.com di kelas contoh
        this.localMembers = [
          {
            id: 1,
            classroom_id: 1,
            student_email: 'siswa@gmail.com',
            student_id: 'student-demo-uuid',
            student_name: 'Ahmad Fauzan',
            status: 'active',
            invited_at: new Date().toISOString(),
            joined_at: new Date().toISOString(),
          },
        ];
      }

      const asg = localStorage.getItem(LOCAL_ASSIGNMENTS_KEY);
      if (asg) {
        this.localAssignments = JSON.parse(asg);
      } else {
        // Seed default penugasan untuk kelas contoh (Pelatnas OSN Kimia 2026)
        this.localAssignments = [
          {
            id: 1,
            classroom_id: 1,
            worksheet_id: 1,
            assigned_at: new Date().toISOString(),
            due_date: new Date(Date.now() + 7 * 86400000).toISOString(),
            is_live_monitored: true,
            worksheet: {
              id: 1,
              title: 'Paket Latihan 01: Struktur Atom & Ikatan Kimia',
              description: 'Latihan mandiri pembinaan intensif OSN Tingkat Nasional.',
              item_count: 10,
              time_limit_minutes: 60,
              pass_score: 75,
              access_token: 'PELATNAS-WS1',
              created_at: new Date().toISOString(),
            } as any,
          },
        ];
      }
    } catch (e) {
      console.warn('Gagal membaca cache lokal kelas:', e);
    }
  }

  private persistLocalStore(): void {
    try {
      localStorage.setItem(LOCAL_CLASSROOMS_KEY, JSON.stringify(this.localClassrooms));
      localStorage.setItem(LOCAL_MEMBERS_KEY, JSON.stringify(this.localMembers));
      localStorage.setItem(LOCAL_ASSIGNMENTS_KEY, JSON.stringify(this.localAssignments));
    } catch (e) {
      console.warn('Gagal menyimpan cache lokal kelas:', e);
    }
  }

  private generateClassCode(name: string): string {
    const clean = name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 4).toUpperCase() || 'KIM';
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `${clean}-${rand}`;
  }

  /**
   * Guru membuat kelas baru
   */
  public async createClassroom(
    teacherId: string,
    name: string,
    description?: string
  ): Promise<Classroom> {
    const code = this.generateClassCode(name);
    const newClass: Classroom = {
      id: Date.now(),
      teacher_id: teacherId,
      name,
      code,
      description: description || 'Kelas pembinaan olimpiade sains kimia',
      created_at: new Date().toISOString(),
      member_count: 0,
      assignment_count: 0,
    };

    // 1. Simpan ke local
    this.localClassrooms.unshift(newClass);
    this.persistLocalStore();

    // 2. Simpan ke Supabase jika terhubung
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classrooms')
          .insert([
            {
              teacher_id: teacherId,
              name,
              code,
              description: newClass.description,
            },
          ])
          .select()
          .maybeSingle();

        if (data && !error) {
          const cloudClass = data as Classroom;
          const idx = this.localClassrooms.findIndex((c) => c.id === newClass.id);
          if (idx !== -1) {
            this.localClassrooms[idx] = { ...cloudClass, member_count: 0, assignment_count: 0 };
            this.persistLocalStore();
          }
          return { ...cloudClass, member_count: 0, assignment_count: 0 };
        }
      } catch (err) {
        console.warn('Gagal membuat kelas di cloud:', err);
      }
    }

    return newClass;
  }

  /**
   * Mensinkronkan kelas lokal yang belum tersimpan di cloud Supabase
   */
  public async syncLocalClassroomsToCloud(): Promise<void> {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    try {
      this.initLocalStore();
      for (const localCls of this.localClassrooms) {
        if (localCls.code === 'PELATNAS-26') continue;

        const { data: existing } = await supabase
          .from('classrooms')
          .select('id')
          .ilike('code', localCls.code)
          .maybeSingle();

        if (!existing) {
          const { data, error } = await supabase
            .from('classrooms')
            .insert([
              {
                teacher_id: localCls.teacher_id,
                name: localCls.name,
                code: localCls.code,
                description: localCls.description,
              },
            ])
            .select()
            .maybeSingle();

          if (data && !error) {
            console.info(`[Sync] Kelas "${localCls.name}" (${localCls.code}) berhasil disinkronkan ke Supabase Cloud!`);
          }
        }
      }
    } catch {
      // Abaikan jika Supabase belum dimigrasi skemanya
    }
  }

  /**
   * Mengambil daftar kelas milik guru yang login
   */
  public async getTeacherClassrooms(teacherId: string): Promise<Classroom[]> {
    this.initLocalStore();
    // Sinkronkan kelas lokal ke cloud di background bila memungkinkan
    this.syncLocalClassroomsToCloud().catch(() => {});

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classrooms')
          .select('*, classroom_members(count), classroom_assignments(count)')
          .eq('teacher_id', teacherId)
          .order('created_at', { ascending: false });

        if (data && !error) {
          const formatted: Classroom[] = data.map((c: any) => ({
            id: c.id,
            teacher_id: c.teacher_id,
            name: c.name,
            code: c.code,
            description: c.description,
            created_at: c.created_at,
            member_count: c.classroom_members?.[0]?.count ?? 0,
            assignment_count: c.classroom_assignments?.[0]?.count ?? 0,
          }));

          // Sinkronisasi ke cache lokal
          formatted.forEach((cloudItem) => {
            const idx = this.localClassrooms.findIndex((l) => l.id === cloudItem.id || l.code === cloudItem.code);
            if (idx !== -1) {
              this.localClassrooms[idx] = cloudItem;
            } else {
              this.localClassrooms.unshift(cloudItem);
            }
          });
          this.persistLocalStore();

          // Gabungkan kelas lokal yang belum tersinkron ke cloud agar tetap tampil bagi guru
          const cloudCodes = new Set(formatted.map((c) => c.code.toUpperCase()));
          const unsyncedLocal = this.localClassrooms.filter(
            (c) =>
              !cloudCodes.has(c.code.toUpperCase()) &&
              (c.teacher_id === teacherId || teacherId === 'teacher-demo-uuid')
          );

          return [...formatted, ...unsyncedLocal];
        }
      } catch (err) {
        console.warn('Gagal mengambil kelas guru dari cloud:', err);
      }
    }

    return this.localClassrooms.filter(
      (c) => c.teacher_id === teacherId || teacherId === 'teacher-demo-uuid'
    );
  }

  /**
   * Mengambil SELURUH kelas dari semua guru (Khusus Portal Administrator)
   */
  public async getAllClassrooms(): Promise<Classroom[]> {
    this.initLocalStore();
    const supabase = getSupabaseClient();

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classrooms')
          .select('*, classroom_members(count), classroom_assignments(count)')
          .order('created_at', { ascending: false });

        if (data && !error) {
          const formatted: Classroom[] = data.map((c: any) => ({
            id: c.id,
            teacher_id: c.teacher_id,
            name: c.name,
            code: c.code,
            description: c.description,
            created_at: c.created_at,
            member_count: c.classroom_members?.[0]?.count ?? 0,
            assignment_count: c.classroom_assignments?.[0]?.count ?? 0,
          }));

          const cloudCodes = new Set(formatted.map((c) => c.code.toUpperCase()));
          const unsyncedLocal = this.localClassrooms.filter((c) => !cloudCodes.has(c.code.toUpperCase()));
          return [...formatted, ...unsyncedLocal];
        }
      } catch (err) {
        console.warn('Gagal mengambil semua kelas dari cloud:', err);
      }
    }

    return [...this.localClassrooms];
  }

  /**
   * Menghapus kelas secara permanen oleh Administrator
   */
  public async adminDeleteClassroom(classroomId: number): Promise<{ success: boolean; error?: string }> {
    this.initLocalStore();
    const supabase = getSupabaseClient();

    if (supabase) {
      try {
        await supabase.from('classrooms').delete().eq('id', classroomId);
      } catch (err: any) {
        console.warn('Gagal menghapus kelas dari cloud:', err?.message);
      }
    }

    this.localClassrooms = this.localClassrooms.filter((c) => c.id !== classroomId);
    this.localMembers = this.localMembers.filter((m) => m.classroom_id !== classroomId);
    this.localAssignments = this.localAssignments.filter((a) => a.classroom_id !== classroomId);
    this.persistLocalStore();

    return { success: true };
  }

  /**
   * Memperbarui detail kelas atau memindahkan pembina oleh Administrator
   */
  public async adminUpdateClassroom(
    classroomId: number,
    patch: { name?: string; description?: string; code?: string; teacher_id?: string }
  ): Promise<{ success: boolean; classroom?: Classroom; error?: string }> {
    this.initLocalStore();
    const supabase = getSupabaseClient();

    if (supabase) {
      try {
        await supabase.from('classrooms').update(patch).eq('id', classroomId);
      } catch (err: any) {
        console.warn('Gagal update kelas di cloud:', err?.message);
      }
    }

    const idx = this.localClassrooms.findIndex((c) => c.id === classroomId);
    if (idx !== -1) {
      this.localClassrooms[idx] = {
        ...this.localClassrooms[idx],
        ...patch,
        updated_at: new Date().toISOString(),
      };
      this.persistLocalStore();
      return { success: true, classroom: this.localClassrooms[idx] };
    }

    return { success: true };
  }

  /**
   * Mengambil detail satu kelas berdasarkan ID
   */
  public async getClassroomById(
    classroomId: number | string,
    currentUserEmail?: string
  ): Promise<Classroom | null> {
    this.initLocalStore();
    const numId = typeof classroomId === 'string' ? parseInt(classroomId, 10) : classroomId;
    const supabase = getSupabaseClient();
    let resultClass: Classroom | null = null;

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classrooms')
          .select('*, classroom_members(count), classroom_assignments(count)')
          .eq('id', numId)
          .maybeSingle();

        if (data && !error) {
          resultClass = {
            id: data.id,
            teacher_id: data.teacher_id,
            name: data.name,
            code: data.code,
            description: data.description,
            created_at: data.created_at,
            member_count: data.classroom_members?.[0]?.count ?? 0,
            assignment_count: data.classroom_assignments?.[0]?.count ?? 0,
          };

          // Ambil nama profil guru pembina
          try {
            const { data: teacherProfile } = await supabase
              .from('profiles')
              .select('full_name, email')
              .eq('id', data.teacher_id)
              .maybeSingle();

            if (teacherProfile) {
              resultClass.teacher_name = teacherProfile.full_name;
              resultClass.teacher_email = teacherProfile.email;
            }
          } catch {}
        }
      } catch (err) {
        console.warn('Gagal mengambil detail kelas dari cloud:', err);
      }
    }

    if (!resultClass) {
      this.initLocalStore();
      const local = this.localClassrooms.find((c) => c.id === numId);
      if (local) {
        resultClass = {
          ...local,
          teacher_name: 'Dr. Ir. Hendra Wijaya, M.Si. (Pembina OSN Kimia)',
          teacher_email: 'pembina.osn@kimia.ac.id',
        };
      }
    }

    if (!resultClass) return null;

    // Cek status keanggotaan pengguna saat ini jika email diberikan
    if (currentUserEmail) {
      const cleanEmail = currentUserEmail.trim().toLowerCase();
      if (supabase) {
        try {
          const { data: memberRow } = await supabase
            .from('classroom_members')
            .select('status')
            .eq('classroom_id', numId)
            .eq('student_email', cleanEmail)
            .maybeSingle();

          if (memberRow) {
            resultClass.user_membership_status = memberRow.status as ClassroomMemberStatus;
          }
        } catch {}
      }

      if (!resultClass.user_membership_status) {
        const localMem = this.localMembers.find(
          (m) => m.classroom_id === numId && m.student_email.toLowerCase() === cleanEmail
        );
        if (localMem) {
          resultClass.user_membership_status = localMem.status;
        }
      }
    }

    return resultClass;
  }

  /**
   * Mencari data kelas berdasarkan Kode Kelas
   */
  public async getClassroomByCode(
    code: string,
    currentUserEmail?: string
  ): Promise<Classroom | null> {
    this.initLocalStore();
    const cleanCode = code.trim().toUpperCase();
    const supabase = getSupabaseClient();

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classrooms')
          .select('id')
          .ilike('code', cleanCode)
          .maybeSingle();

        if (data && !error) {
          return this.getClassroomById(data.id, currentUserEmail);
        }
      } catch (err) {
        console.warn('Gagal mencari kelas berdasarkan kode di cloud:', err);
      }
    }

    // Selalu pastikan membaca state localStorage terbaru jika multi-tab
    this.initLocalStore();
    const local = this.localClassrooms.find(
      (c) => c.code.trim().toUpperCase() === cleanCode
    );
    if (local) {
      return this.getClassroomById(local.id, currentUserEmail);
    }

    return null;
  }

  /**
   * Guru mengundang siswa via email
   */
  public async inviteStudentByEmail(
    classroomId: number,
    studentEmail: string,
    studentName?: string
  ): Promise<ClassroomMember> {
    const cleanEmail = studentEmail.trim().toLowerCase();

    // Cek apakah siswa sudah terdaftar di auth profiles
    const supabase = getSupabaseClient();
    let linkedStudentId: string | null = null;
    let resolvedName = studentName || cleanEmail.split('@')[0];
    let initialStatus: 'invited' | 'active' = 'invited';

    if (supabase) {
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('id, full_name')
          .eq('email', cleanEmail)
          .maybeSingle();

        if (profile) {
          linkedStudentId = profile.id;
          resolvedName = profile.full_name || resolvedName;
          initialStatus = 'active'; // Siswa sudah punya akun, langsung aktif
        }
      } catch {}
    }

    const newMember: ClassroomMember = {
      id: Date.now(),
      classroom_id: classroomId,
      student_email: cleanEmail,
      student_id: linkedStudentId,
      student_name: resolvedName,
      status: initialStatus,
      invited_at: new Date().toISOString(),
      joined_at: initialStatus === 'active' ? new Date().toISOString() : null,
    };

    // 1. Simpan di local
    const existIdx = this.localMembers.findIndex(
      (m) => m.classroom_id === classroomId && m.student_email === cleanEmail
    );
    if (existIdx !== -1) {
      this.localMembers[existIdx] = newMember;
    } else {
      this.localMembers.unshift(newMember);
    }
    this.persistLocalStore();

    // 2. Simpan di Supabase
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classroom_members')
          .upsert(
            [
              {
                classroom_id: classroomId,
                student_email: cleanEmail,
                student_id: linkedStudentId,
                student_name: resolvedName,
                status: initialStatus,
                invited_at: newMember.invited_at,
                joined_at: newMember.joined_at,
              },
            ],
            { onConflict: 'classroom_id,student_email' }
          )
          .select()
          .maybeSingle();

        if (data && !error) {
          return data as ClassroomMember;
        }
      } catch (err) {
        console.warn('Gagal invite siswa di cloud:', err);
      }
    }

    return newMember;
  }

  /**
   * Mengambil daftar anggota siswa di suatu kelas
   */
  public async getClassroomMembers(classroomId: number): Promise<ClassroomMember[]> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classroom_members')
          .select('*')
          .eq('classroom_id', classroomId)
          .order('invited_at', { ascending: false });

        if (data && !error) {
          return data as ClassroomMember[];
        }
      } catch (err) {
        console.warn('Gagal mengambil anggota kelas dari cloud:', err);
      }
    }

    return this.localMembers.filter((m) => m.classroom_id === classroomId);
  }

  /**
   * Menghapus siswa dari kelas
   */
  public async removeStudentFromClass(classroomId: number, memberId: number): Promise<boolean> {
    this.localMembers = this.localMembers.filter(
      (m) => !(m.classroom_id === classroomId && m.id === memberId)
    );
    const clsIdx = this.localClassrooms.findIndex((c) => c.id === classroomId);
    if (clsIdx !== -1) {
      this.localClassrooms[clsIdx].member_count = this.localMembers.filter(
        (m) => m.classroom_id === classroomId && m.status === 'active'
      ).length;
    }
    this.persistLocalStore();

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase
          .from('classroom_members')
          .delete()
          .eq('id', memberId)
          .eq('classroom_id', classroomId);
      } catch (err) {
        console.warn('Gagal menghapus siswa di cloud:', err);
      }
    }

    return true;
  }

  /**
   * Guru menyetujui siswa yang berstatus 'pending_approval'
   */
  public async approveStudent(classroomId: number, memberId: number): Promise<boolean> {
    const now = new Date().toISOString();

    // 1. Update di local store
    const memIdx = this.localMembers.findIndex(
      (m) => m.classroom_id === classroomId && m.id === memberId
    );
    if (memIdx !== -1) {
      this.localMembers[memIdx].status = 'active';
      this.localMembers[memIdx].joined_at = now;
    }

    const clsIdx = this.localClassrooms.findIndex((c) => c.id === classroomId);
    if (clsIdx !== -1) {
      this.localClassrooms[clsIdx].member_count = this.localMembers.filter(
        (m) => m.classroom_id === classroomId && m.status === 'active'
      ).length;
    }
    this.persistLocalStore();

    // 2. Update di Supabase
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase
          .from('classroom_members')
          .update({ status: 'active', joined_at: now })
          .eq('id', memberId)
          .eq('classroom_id', classroomId);
      } catch (err) {
        console.warn('Gagal menyetujui siswa di cloud:', err);
      }
    }

    return true;
  }

  /**
   * Guru menolak siswa yang berstatus 'pending_approval'
   */
  public async rejectStudent(classroomId: number, memberId: number): Promise<boolean> {
    return this.removeStudentFromClass(classroomId, memberId);
  }

  /**
   * Siswa bergabung ke kelas menggunakan Kode Kelas.
   * Siswa baru akan berstatus 'pending_approval' sampai disetujui Guru Pembina.
   */
  public async joinClassroomByCode(
    code: string,
    studentEmail: string,
    studentId?: string,
    studentName?: string
  ): Promise<JoinClassroomResult> {
    this.initLocalStore();
    const cleanCode = code.trim().toUpperCase();
    const cleanEmail = studentEmail.trim().toLowerCase();

    if (!cleanCode) {
      return { success: false, message: 'Harap masukkan kode kelas.', status: undefined };
    }
    if (!cleanEmail) {
      return { success: false, message: 'Email siswa tidak valid.', status: undefined };
    }

    const targetClass = await this.getClassroomByCode(cleanCode, cleanEmail);

    if (!targetClass) {
      return {
        success: false,
        message: `Kode kelas "${cleanCode}" tidak ditemukan. Pastikan kode yang diberikan oleh Guru Pembina sudah benar.`,
      };
    }

    const supabase = getSupabaseClient();
    let existingMember: ClassroomMember | null = null;

    if (supabase) {
      try {
        const { data } = await supabase
          .from('classroom_members')
          .select('*')
          .eq('classroom_id', targetClass.id)
          .eq('student_email', cleanEmail)
          .maybeSingle();

        if (data) {
          existingMember = data as ClassroomMember;
        }
      } catch {}
    }

    if (!existingMember) {
      const localMem = this.localMembers.find(
        (m) => m.classroom_id === targetClass.id && m.student_email.toLowerCase() === cleanEmail
      );
      if (localMem) existingMember = localMem;
    }

    // Jika sudah aktif
    if (existingMember && existingMember.status === 'active') {
      return {
        success: true,
        status: 'active',
        classroom: { ...targetClass, user_membership_status: 'active' },
        alreadyJoined: true,
        message: `Anda sudah menjadi anggota aktif di kelas "${targetClass.name}".`,
      };
    }

    // Jika sudah mengajukan dan masih menunggu persetujuan
    if (existingMember && existingMember.status === 'pending_approval') {
      return {
        success: true,
        status: 'pending_approval',
        classroom: { ...targetClass, user_membership_status: 'pending_approval' },
        alreadyJoined: true,
        message: `Permintaan bergabung ke kelas "${targetClass.name}" sudah dikirim sebelumnya dan sedang menunggu persetujuan Guru Pembina.`,
      };
    }

    // Jika sebelumnya diundang langsung oleh guru ('invited'), pendaftaran via kode langsung aktif
    const nextStatus: ClassroomMemberStatus =
      existingMember && existingMember.status === 'invited' ? 'active' : 'pending_approval';

    const resolvedName = studentName || cleanEmail.split('@')[0];
    const newMember: ClassroomMember = {
      id: existingMember ? existingMember.id : Date.now(),
      classroom_id: targetClass.id,
      student_email: cleanEmail,
      student_id: studentId || null,
      student_name: resolvedName,
      status: nextStatus,
      invited_at: existingMember ? existingMember.invited_at : new Date().toISOString(),
      joined_at: nextStatus === 'active' ? new Date().toISOString() : null,
    };

    // 1. Simpan di local store
    const localIdx = this.localMembers.findIndex(
      (m) => m.classroom_id === targetClass.id && m.student_email.toLowerCase() === cleanEmail
    );
    if (localIdx !== -1) {
      this.localMembers[localIdx] = newMember;
    } else {
      this.localMembers.unshift(newMember);
    }
    this.persistLocalStore();

    // 2. Simpan di Supabase
    if (supabase) {
      try {
        await supabase
          .from('classroom_members')
          .upsert(
            [
              {
                classroom_id: targetClass.id,
                student_email: cleanEmail,
                student_id: studentId || null,
                student_name: resolvedName,
                status: nextStatus,
                invited_at: newMember.invited_at,
                joined_at: newMember.joined_at,
              },
            ],
            { onConflict: 'classroom_id,student_email' }
          );
      } catch (err) {
        console.warn('Gagal menyimpan permintaan masuk kelas di Supabase:', err);
      }
    }

    const message =
      nextStatus === 'active'
        ? `Selamat! Undangan Anda telah diaktifkan, Anda resmi bergabung di "${targetClass.name}".`
        : `Permintaan bergabung ke kelas "${targetClass.name}" berhasil dikirim! Menunggu persetujuan Guru Pembina.`;

    return {
      success: true,
      status: nextStatus,
      classroom: { ...targetClass, user_membership_status: nextStatus },
      message,
    };
  }

  /**
   * Menugaskan worksheet ke kelas
   */
  public async assignWorksheetToClass(
    classroomId: number,
    worksheetId: number,
    dueDate?: string,
    isLiveMonitored: boolean = true
  ): Promise<ClassroomAssignment> {
    const newAssignment: ClassroomAssignment = {
      id: Date.now(),
      classroom_id: classroomId,
      worksheet_id: worksheetId,
      assigned_at: new Date().toISOString(),
      due_date: dueDate || null,
      is_live_monitored: isLiveMonitored,
    };

    // 1. Simpan di local
    this.localAssignments.unshift(newAssignment);
    const clsIdx = this.localClassrooms.findIndex((c) => c.id === classroomId);
    if (clsIdx !== -1) {
      this.localClassrooms[clsIdx].assignment_count = this.localAssignments.filter(
        (a) => a.classroom_id === classroomId
      ).length;
    }
    this.persistLocalStore();

    // 2. Simpan di Supabase
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classroom_assignments')
          .upsert(
            [
              {
                classroom_id: classroomId,
                worksheet_id: worksheetId,
                assigned_at: newAssignment.assigned_at,
                due_date: dueDate || null,
                is_live_monitored: isLiveMonitored,
              },
            ],
            { onConflict: 'classroom_id,worksheet_id' }
          )
          .select()
          .maybeSingle();

        if (data && !error) {
          return data as ClassroomAssignment;
        }
      } catch (err) {
        console.warn('Gagal menugaskan worksheet di cloud:', err);
      }
    }

    return newAssignment;
  }

  /**
   * Mengambil daftar penugasan di suatu kelas
   */
  public async getClassroomAssignments(classroomId: number): Promise<ClassroomAssignment[]> {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classroom_assignments')
          .select('*, worksheets(*)')
          .eq('classroom_id', classroomId)
          .order('assigned_at', { ascending: false });

        if (data && !error) {
          return data.map((d: any) => ({
            id: d.id,
            classroom_id: d.classroom_id,
            worksheet_id: d.worksheet_id,
            assigned_at: d.assigned_at,
            due_date: d.due_date,
            is_live_monitored: d.is_live_monitored,
            worksheet: d.worksheets,
          }));
        }
      } catch (err) {
        console.warn('Gagal mengambil penugasan kelas dari cloud:', err);
      }
    }

    return this.localAssignments.filter((a) => a.classroom_id === classroomId);
  }

  /**
   * Mengambil daftar kelas yang diikuti oleh siswa berdasarkan email/student_id
   * Menyertakan status keanggotaan (active / pending_approval)
   */
  public async getStudentClassrooms(
    studentEmail: string,
    studentId?: string
  ): Promise<Classroom[]> {
    this.initLocalStore();
    const cleanEmail = studentEmail.trim().toLowerCase();
    const supabase = getSupabaseClient();

    if (supabase) {
      try {
        // Cari members di mana student_email cocok
        const { data: memberRows, error } = await supabase
          .from('classroom_members')
          .select('classroom_id, status, classrooms(*)')
          .eq('student_email', cleanEmail);

        if (memberRows && !error) {
          // Update status ke 'active' jika masih 'invited' dan ada studentId
          if (studentId) {
            await supabase
              .from('classroom_members')
              .update({ status: 'active', student_id: studentId, joined_at: new Date().toISOString() })
              .eq('student_email', cleanEmail)
              .eq('status', 'invited');
          }

          const cloudClassrooms = memberRows
            .map((r: any) => {
              if (!r.classrooms) return null;
              return {
                ...r.classrooms,
                user_membership_status: r.status as ClassroomMemberStatus,
              };
            })
            .filter((c): c is Classroom => Boolean(c));

          // Gabungkan kelas lokal jika siswa bergabung pada kelas lokal yang belum di cloud
          const cloudClassIds = new Set(cloudClassrooms.map((c) => c.id));
          const studentMembers = this.localMembers.filter(
            (m) => m.student_email.toLowerCase() === cleanEmail
          );
          const localOnlyClasses = this.localClassrooms
            .filter(
              (c) =>
                !cloudClassIds.has(c.id) &&
                studentMembers.some((m) => m.classroom_id === c.id)
            )
            .map((c) => {
              const mem = studentMembers.find((m) => m.classroom_id === c.id);
              return {
                ...c,
                user_membership_status: mem ? mem.status : ('active' as ClassroomMemberStatus),
              };
            });

          return [...cloudClassrooms, ...localOnlyClasses];
        }
      } catch (err) {
        console.warn('Gagal mengambil kelas siswa dari cloud:', err);
      }
    }

    // Local fallback: jika email siswa terdaftar di localMembers
    const studentMembers = this.localMembers.filter(
      (m) => m.student_email.toLowerCase() === cleanEmail
    );
    const matchedClassIds = studentMembers.map((m) => m.classroom_id);

    return this.localClassrooms
      .filter((c) => matchedClassIds.includes(c.id))
      .map((c) => {
        const mem = studentMembers.find((m) => m.classroom_id === c.id);
        return {
          ...c,
          user_membership_status: mem ? mem.status : 'active',
        };
      });
  }

  /**
   * Mengambil seluruh worksheet yang ditugaskan ke kelas-kelas siswa.
   * Hanya kelas dengan status 'active' yang tugasnya dapat diakses.
   */
  public async getStudentAssignments(
    studentEmail: string,
    studentId?: string
  ): Promise<ClassroomAssignment[]> {
    const studentClasses = await this.getStudentClassrooms(studentEmail, studentId);
    // Hanya ambil penugasan untuk kelas yang sudah berstatus 'active'
    const activeClasses = studentClasses.filter(
      (c) => !c.user_membership_status || c.user_membership_status === 'active'
    );
    const classIds = activeClasses.map((c) => c.id);

    if (classIds.length === 0) return [];

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('classroom_assignments')
          .select('*, classrooms(*), worksheets(*)')
          .in('classroom_id', classIds)
          .order('assigned_at', { ascending: false });

        if (data && !error) {
          return data.map((d: any) => ({
            id: d.id,
            classroom_id: d.classroom_id,
            worksheet_id: d.worksheet_id,
            assigned_at: d.assigned_at,
            due_date: d.due_date,
            is_live_monitored: d.is_live_monitored,
            classroom: d.classrooms,
            worksheet: d.worksheets,
          }));
        }
      } catch (err) {
        console.warn('Gagal mengambil penugasan siswa dari cloud:', err);
      }
    }

    return this.localAssignments.filter((a) => classIds.includes(a.classroom_id));
  }

  /**
   * Setujui semua siswa pending_approval di sebuah kelas sekaligus.
   */
  public async approveAllPending(classroomId: number): Promise<number> {
    const members = await this.getClassroomMembers(classroomId);
    const pending = members.filter((m) => m.status === 'pending_approval');
    if (pending.length === 0) return 0;

    await Promise.all(pending.map((m) => this.approveStudent(classroomId, m.id)));
    return pending.length;
  }

  /**
   * Mengambil seluruh siswa pending_approval lintas semua kelas milik guru.
   * Digunakan oleh TeacherDashboard untuk banner persetujuan global.
   */
  public async getPendingApprovalsAcrossClasses(
    teacherId: string
  ): Promise<Array<ClassroomMember & { classroom_name: string; classroom_id: number }>> {
    const classrooms = await this.getTeacherClassrooms(teacherId);
    const allPending: Array<ClassroomMember & { classroom_name: string; classroom_id: number }> = [];
    for (const cls of classrooms) {
      const members = await this.getClassroomMembers(cls.id);
      members
        .filter((m) => m.status === 'pending_approval')
        .forEach((m) =>
          allPending.push({ ...m, classroom_name: cls.name, classroom_id: cls.id })
        );
    }
    return allPending;
  }

  /**
   * Menghapus penugasan worksheet dari kelas.
   */
  public async removeAssignment(assignmentId: number): Promise<boolean> {
    this.localAssignments = this.localAssignments.filter((a) => a.id !== assignmentId);
    this.persistLocalStore();

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('classroom_assignments').delete().eq('id', assignmentId);
      } catch (err) {
        console.warn('Gagal menghapus assignment di cloud:', err);
      }
    }
    return true;
  }

  /**
   * Mengambil riwayat submissions siswa untuk satu worksheet tertentu di sebuah kelas.
   * Mencocokkan submission berdasarkan question_id dalam worksheet dan user_id siswa di kelas.
   */
  public async getWorksheetSubmissions(
    questionIds: number[],
    studentIds: string[]
  ): Promise<any[]> {
    if (questionIds.length === 0 || studentIds.length === 0) return [];

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('worksheet_submissions')
          .select('*')
          .in('question_id', questionIds)
          .in('user_id', studentIds);

        if (data && !error && data.length > 0) {
          return data;
        }
      } catch (err) {
        console.warn('Gagal memuat submissions dari cloud:', err);
      }
    }

    // Fallback: cari dari local submissions cache di localStorage
    try {
      const raw = localStorage.getItem('osn_student_submissions');
      if (raw) {
        const parsed = JSON.parse(raw);
        return parsed.filter(
          (sub: any) =>
            questionIds.includes(Number(sub.questionId || sub.question_id)) &&
            studentIds.includes(sub.userId || sub.user_id)
        );
      }
    } catch {}

    return [];
  }

  /**
   * Menghapus kelas (khusus guru pemilik)
   */
  public async deleteClassroom(classroomId: number): Promise<boolean> {
    this.localClassrooms = this.localClassrooms.filter((c) => c.id !== classroomId);
    this.localMembers = this.localMembers.filter((m) => m.classroom_id !== classroomId);
    this.localAssignments = this.localAssignments.filter((a) => a.classroom_id !== classroomId);
    this.persistLocalStore();

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('classrooms').delete().eq('id', classroomId);
      } catch (err) {
        console.warn('Gagal menghapus kelas di cloud:', err);
      }
    }

    return true;
  }
}

export const classroomService = new ClassroomService();
