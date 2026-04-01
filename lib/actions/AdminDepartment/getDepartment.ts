const API = "http://localhost:8080/api/v1/admin/departments";

import { authFetch } from "@/lib/api/authFetch";

export async function getDepartments() {
  const { response: res } = await authFetch(
    "http://localhost:8080/api/v1/admin/departments",
    {
      method: "GET",
    },
  );
  console.log("Response:", res.status); //log status for debugging

  if (!res.ok) {
    throw new Error("Failed to fetch departments");
  }

  return res.json();
}

export async function getDepartmentById(id: string) {
  const { response: res } = await authFetch(
    `http://localhost:8080/api/v1/admin/departments/${id}`,
    {
      method: "GET",
      next: { tags: ["departments"] },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch department");
  }

  return res.json();
}
