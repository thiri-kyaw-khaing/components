const API = "http://localhost:8080/api/v1/admin/departments";

import { cookies } from "next/headers";

export async function getDepartments() {
  const cookieStore = await cookies(); //  await

  // build cookie string manually
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch("http://localhost:8080/api/v1/admin/departments", {
    method: "GET",
    credentials: "include", //include credentials
    headers: {
      Cookie: cookieHeader, // correct now
    },
  });
  console.log("Response:", res.status); //log status for debugging

  if (!res.ok) {
    throw new Error("Failed to fetch departments");
  }

  return res.json();
}

export async function getDepartmentById(id: string) {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(
    `http://localhost:8080/api/v1/admin/departments/${id}`,
    {
      method: "GET",
      credentials: "include", // ✅ send cookies
      headers: {
        Cookie: cookieHeader,
      },
      next: { tags: ["departments"] },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch department");
  }

  return res.json();
}
