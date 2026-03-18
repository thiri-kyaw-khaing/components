"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  email: z.string().trim().email("Invalid email address!"),
  password: z.string().trim().min(6, "Password must be at least 6 characters!"),
});

export async function LoginAction(
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const flattened = z.flattenError(validatedFields.error);

    return {
      errors: flattened.fieldErrors,
      message: "Failed to login. Please check your input.",
    };
  }

  const { email, password } = validatedFields.data;
  let isAuthenticated = false;

  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/admin/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorData = await response.json();

      return {
        message: errorData?.message || "Invalid email or password",
      };
    }

    isAuthenticated = true;
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  if (isAuthenticated) {
    redirect("/dashboard");
  }
}
