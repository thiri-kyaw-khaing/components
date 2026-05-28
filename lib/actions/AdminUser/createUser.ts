"use server";

import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    name?: string[];
    employeeId?: string[];
    email?: string[];
    phone?: string[];
    departmentId?: string[];
    role?: string[];
    position?: string[];
    password?: string[];
    status?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters!")
    .max(52, "Full name must be at most 52 characters!"),
  employeeId: z
    .string()
    .trim()
    .min(1, "Employee ID is required!")
    .max(52, "Employee ID must be at most 52 characters!"),
  email: z
    .string()
    .trim()
    .email("Invalid email address!")
    .max(52, "Email must be at most 52 characters!"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone must be at most 20 characters!")
    .optional()
    .or(z.literal("")),
  departmentId: z.coerce.number().int().min(1, "Department ID is required!"),
  role: z.enum(["DepartmentHead(manager)", "Staff"]),
  position: z
    .string()
    .trim()
    .min(1, "Position is required!")
    .max(100, "Position must be at most 100 characters!"),
  password: z.string().trim().min(6, "Password must be at least 6 characters!"),
  status: z.enum(["Active", "Inactive", "Suspended"]),
});

export async function CreateUserAction(
  prevState: State | void,
  formData: FormData,
): Promise<State | void> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    employeeId: formData.get("employeeId"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    departmentId: formData.get("departmentId"),
    role: formData.get("role"),
    position: formData.get("position"),
    password: formData.get("password"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    const flattened = z.flattenError(validatedFields.error);

    return {
      errors: flattened.fieldErrors,
      message: "Failed to create user. Please check your input.",
    };
  }

  const {
    name,
    employeeId,
    email,
    phone,
    departmentId,
    role,
    position,
    password,
    status,
  } = validatedFields.data;
  let isCreated = false;

  try {
    const { response } = await authFetch(`${API_BASE_URL}/admin/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        employeeID: employeeId,
        email,
        phone: phone || "",
        departmentId,
        role,
        position,
        password,
        status,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json();

      return {
        message:
          errorData?.message || "Failed to create user. Please try again.",
      };
    }

    isCreated = true;
  } catch {
    return {
      message: "Server error. Please try again later.",
    };
  }

  if (isCreated) {
    redirect("/user-management");
  }
}
