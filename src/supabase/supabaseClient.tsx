import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPA_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function slovencinaQuestions() {
    const { data, error} = await supabase.from("slovencina").select();
     return {data, error};
}