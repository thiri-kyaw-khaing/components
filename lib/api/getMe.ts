"use server";

import { authFetch } from "@/lib/api/authFetch";

export async function getMe() {
  const { response, unauthorized } = await authFetch("/auth/me", {
    method: "GET",
    cache: "no-store",
  });

  if (unauthorized) {
    return null;
  }
  return response.json();
}
