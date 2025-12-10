"use server";
import { redirect } from "next/navigation";
import { ContactSchema } from "./validations/contacts";

export default async function contact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten();
    console.log("ERROR: ", errors);
    return { success: false, errors: errors.fieldErrors };
  }
  console.log(name, email, message);
  redirect("/contacts/complete");
}
