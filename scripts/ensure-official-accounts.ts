import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://gedmqzdolkmhoehbgxxk.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || '';

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function checkAndSeedAccounts() {
  console.log('=== CHECKING & ENSURING OFFICIAL DEMO & ADMIN ACCOUNTS IN SUPABASE AUTH ===');
  
  const accountsToEnsure = [
    {
      email: 'fluffykitten.dev@gmail.com',
      password: '354123', // admin custom password
      fullName: 'Administrator (FluffyKitten)',
      role: 'teacher',
      is_admin: true,
      school: 'Pusat Pembinaan OSN Kimia',
    },
    {
      email: 'ezzarscarlet@gmail.com',
      password: '354123', // teacher admin password
      fullName: 'Ezzar Scarlet',
      role: 'teacher',
      is_admin: true,
      school: 'SMA Labschool',
    },
    {
      email: 'guru@osnkimia.id',
      password: '354123',
      fullName: 'Dr. Hendra Wijaya, M.Si.',
      role: 'teacher',
      is_admin: false,
      school: 'SMA Unggulan CT Foundation',
    },
    {
      email: 'siswa@osnkimia.id',
      password: '354123',
      fullName: 'Ahmad Fauzan (Siswa OSN)',
      role: 'student',
      is_admin: false,
      school: 'SMAN 1 Padang',
      target: 'OSN',
      grade: '11',
    }
  ];

  const { data: listData, error: listErr } = await supabase.auth.admin.listUsers();
  if (listErr) {
    console.error('Failed to list users:', listErr);
    return;
  }

  const existingUsers = listData.users;
  console.log('Existing users in Auth:', existingUsers.map(u => u.email));

  for (const acc of accountsToEnsure) {
    let existing = existingUsers.find(u => u.email?.toLowerCase() === acc.email.toLowerCase());
    let userId = existing?.id;

    if (!existing) {
      console.log(`Creating user in Supabase Auth: ${acc.email}...`);
      const { data: created, error: createErr } = await supabase.auth.admin.createUser({
        email: acc.email,
        password: '354123', // default password
        email_confirm: true,
        user_metadata: {
          full_name: acc.fullName,
          role: acc.role,
          is_admin: acc.is_admin,
          school_name: acc.school,
        }
      });
      if (createErr) {
        console.error(`Failed to create ${acc.email}:`, createErr.message);
      } else {
        userId = created.user.id;
        console.log(`Created user ${acc.email} with id ${userId}`);
      }
    } else {
      console.log(`User ${acc.email} already exists (${userId}). Ensuring confirmed and updating password...`);
      // Update password to 'password' or ensure confirmed
      await supabase.auth.admin.updateUserById(userId!, {
        email_confirm: true,
        password: '354123',
        user_metadata: {
          ...existing.user_metadata,
          full_name: acc.fullName,
          role: acc.role,
          is_admin: acc.is_admin,
          school_name: acc.school,
        }
      });
    }

    if (userId) {
      // Ensure row in public.profiles
      const { data: prof, error: profErr } = await supabase
        .from('profiles')
        .upsert({
          id: userId,
          email: acc.email,
          full_name: acc.fullName,
          role: acc.role,
          school_name: acc.school,
          grade_level: acc.grade || '11',
          target_olympiad: acc.target || 'OSN',
          membership_tier: 'free',
          xp: 1500,
          level: 5,
          current_streak: 7,
          ai_grading_access: acc.role === 'teacher' ? true : false,
        }, { onConflict: 'id' });

      console.log(`Ensured profile for ${acc.email}:`, profErr ? profErr.message : 'OK');
    }
  }

  // Also check if itsafunnyjokeforsure has password 'password'
  const studentBambang = existingUsers.find(u => u.email?.toLowerCase() === 'itsafunnyjokeforsure@gmail.com');
  if (studentBambang) {
    console.log(`Updating itsafunnyjokeforsure@gmail.com to ensure password 'password' works as well as '354123'...`);
    await supabase.auth.admin.updateUserById(studentBambang.id, {
      email_confirm: true,
      password: '354123',
    });
  }
}

checkAndSeedAccounts().catch(console.error);
