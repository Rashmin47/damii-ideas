"use client";
import { useFormStatus } from "react-dom";
export default function IdeasFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
