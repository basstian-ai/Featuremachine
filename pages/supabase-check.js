import { supabase } from '../lib/supabaseClient';
export default function Check(){
  return <pre style={{padding:20}}>Supabase wired: {String(Boolean(supabase))}</pre>;
}
export async function getServerSideProps(){ return { props: {} }; }
