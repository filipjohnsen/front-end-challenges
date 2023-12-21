"use server";

import { z } from "zod";

const NewsletterSchema = z.object({
  email: z.string().email({
    message: "Valid email is required",
  }),
});

export type NewsletterState =
  | {
      errors?: {
        email?: string[];
      };
      sucess?: never;
    }
  | {
      errors?: never;
      success: true;
    };

export async function signupToNewsletter(_: NewsletterState, data: FormData) {
  const validatedFields = NewsletterSchema.safeParse({
    email: data.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
  };
}
