import { supabase } from '../lib/supabaseClient';
export default function Check() { 
  // This only proves env variables are wired; we don't fetch data.
  return <pre style={{padding:20}}>Supabase wired: {String(!!supabase)}</pre>;
}
