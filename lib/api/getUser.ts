import { API_BASE_URL } from "@/app/api/api";
import { authFetch } from "@/lib/api/authFetch";

export async function getUsers() {
  const { response: res } = await authFetch(`${API_BASE_URL}/admin/users`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export async function getUserById(id: string) {
  const { response: res } = await authFetch(
    `${API_BASE_URL}/admin/users/${id}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
}
