import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gedmqzdolkmhoehbgxxk.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZG1xemRvbGttaG9laGJneHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzOTIzMjYsImV4cCI6MjEwNDk2ODMyNn0.InPThoocvZaWNdxFTi3O80L3Fm5wBe0wvHRjqGCq37Q';
const supabase = createClient(supabaseUrl, anonKey);

async function simulateBrowser() {
  console.log('=== 1. SIGN IN WITH SUPABASE AS itsafunnyjokeforsure@gmail.com ===');
  const { data: authData, error: authErr } = await supabase.auth.signInWithPassword({
    email: 'itsafunnyjokeforsure@gmail.com',
    password: '354123'
  });

  if (authErr) {
    console.error('Auth error:', authErr);
    return;
  }

  const user = authData.user;
  console.log('Logged in user:', { id: user.id, email: user.email, meta: user.user_metadata });

  console.log('=== 2. FETCH PROFILE (as browser does) ===');
  const { data: profile, error: profErr } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  console.log('Fetched profile:', profile, profErr);

  console.log('=== 3. GET STUDENT CLASSROOMS (as classroomService does) ===');
  const cleanEmail = user.email.trim().toLowerCase();
  const { data: memberRows, error: memErr } = await supabase
    .from('classroom_members')
    .select('classroom_id, status, classrooms(*)')
    .eq('student_email', cleanEmail);

  console.log('memberRows with authenticated token:', memberRows, memErr);

  const cloudClassrooms = (memberRows || [])
    .map((r: any) => {
      if (!r.classrooms) return null;
      return {
        ...r.classrooms,
        user_membership_status: r.status,
      };
    })
    .filter(Boolean);

  console.log('Processed cloudClassrooms:', cloudClassrooms);
  const hasActive = cloudClassrooms.some((c: any) => c.user_membership_status === 'active');
  console.log('hasActive:', hasActive);
}

simulateBrowser().catch(console.error);
