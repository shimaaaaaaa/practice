"use server";
import { redirect } from "next/navigation";
import { ContactSchema } from "./validations/contacts";

type ActionState = {
  success: boolean;
  errors: { name?: string[]; email?: string[] };
  serverError?: string;
};

export default async function contact(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    console.log("ERROR: ", errors);
    return {
      success: false,
      errors: { name: errors.name || [], email: errors.email || [] },
    };
  }
  console.log(name, email, message);
  redirect("/contacts/complete");
}
