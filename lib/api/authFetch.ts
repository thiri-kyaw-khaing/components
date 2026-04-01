"use server";

import { API_BASE_URL } from "@/app/api/api";
import { cookies } from "next/headers";

export type AuthFetchResult = {
  response: Response;
  unauthorized: boolean;
};

export async function authFetch(
  path: string,
  init: RequestInit = {},
): Promise<AuthFetchResult> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const headers = new Headers(init.headers);

  // ONLY send Authorization header
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  // Auto JSON
  if (!headers.has("Content-Type") && !(init.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;

  const response = await fetch(url, {
    ...init,
    headers,
  });

  const unauthorized = response.status === 401 || response.status === 403;

  return { response, unauthorized };
}
