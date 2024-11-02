import { supabase } from "./supabase";

export async function getTodoList() {
  const { data, error } = await supabase.from("todo").select("*");
  if (error) {
    console.log("error", error);
    return [];
  }
  console.log("data fetching success", data);
  return data;
}

export async function createTodoList(title: string) {
  const { data, error } = await supabase.from("todo").insert([
    {
      title,
      createdAt: new Date().toISOString(),
      updatedAt: null,
      completed: false,
    },
  ]);
  if (error) {
    console.log("error", error);
    return [];
  }
  console.log("data fetching success", data);
  return data;
}

export async function updateTodoList(
  id: string,
  title: string,
  completed: boolean
) {
  const { data, error } = await supabase
    .from("todo")
    .update({
      title,
      completed,
      updatedAt: new Date().toISOString(),
    })
    .eq("id", id);
  if (error) {
    console.log("error", error);
    return [];
  }
  console.log("data fetching success", data);
  return data;
}

export async function deleteTodoList(id: string) {
  const { data, error } = await supabase.from("todo").delete().eq("id", id);
  if (error) {
    console.log("error", error);
    return [];
  }
  console.log("data fetching success", data);
  return data;
}
