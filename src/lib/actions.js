"use server";
import { saveIdea } from "./ideas";

import { redirect } from "next/navigation";

export async function shareIdea(formData) {
  const idea = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await saveIdea(idea);
  redirect("/ideas");
}
