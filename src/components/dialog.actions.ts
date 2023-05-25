"use server";

import { supabase } from "@/helpers/supabase";
import { revalidatePath } from "next/cache";

export const submit = async (data: FormData) => {
  const noteToAdd = data.get("note");
  console.log("HELLO?", noteToAdd)

  const { data: note, error } = await supabase
    .from("posts")
    .insert([{ name: noteToAdd }]);

  console.log(note, error);

  revalidatePath("/");
  revalidatePath("/?create=true")
};
