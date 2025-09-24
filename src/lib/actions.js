"use server";
import { revalidatePath } from "next/cache";
import { saveIdea } from "./ideas";

import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !idea.text || idea.text.trim() === "";
}

export async function shareIdea(prevState, formData) {
  const idea = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(idea.title) ||
    isInvalidText(idea.summary) ||
    isInvalidText(idea.instructions) ||
    isInvalidText(idea.creator) ||
    isInvalidText(idea.creator_email) ||
    !idea.creator_email.includes("@") ||
    !idea.image ||
    idea.image.size === 0
  )
    return {
      message: "Invalid Input.",
    };
  await saveIdea(idea);
  revalidatePath("/ideas");
  redirect("/ideas");
}
