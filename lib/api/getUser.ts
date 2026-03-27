import { cookies } from "next/headers";
import { API_BASE_URL } from "@/app/api/api";

async function getCookieHeader(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
}

export async function getUsers() {
  const res = await fetch(`${API_BASE_URL}/admin/users`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: await getCookieHeader(),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export async function getUserById(id: string) {
  const res = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: await getCookieHeader(),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
}
