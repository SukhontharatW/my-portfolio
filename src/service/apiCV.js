import supabase from "./supabase";

export async function getCVs() {
  const { data, error } = await supabase.from("CVs").select("*");
  if (error) {
    console.error(error);
    throw new Error("Project could not be loaded");
  }

  return data;
}
