import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";

export async function getDepartments() {
  const { response: res } = await authFetch(`${API_BASE_URL}/admin/departments`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch departments");
  }

  return res.json();
}

export async function getDepartmentById(id: string) {
  const { response: res } = await authFetch(
    `${API_BASE_URL}/admin/departments/${id}`,
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
