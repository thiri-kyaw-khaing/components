import { API_BASE_URL } from "@/app/api/api";
import type { UserList, UserMeta } from "@/app/types/userManagement";
import { authFetch } from "@/lib/api/authFetch";

export type GetUsersResponse = {
  data: {
    items: UserList[];
    meta: UserMeta;
  };
  success: boolean;
};

type GetUsersParams = {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  departmentId?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export async function getUsers({
  page = 1,
  limit = 10,
  search,
  status,
  departmentId,
  sortBy,
  sortOrder,
}: GetUsersParams = {}): Promise<GetUsersResponse> {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (search) {
    query.set("search", search);
  }

  if (status) {
    query.set("status", status);
  }

  if (typeof departmentId === "number" && Number.isFinite(departmentId)) {
    query.set("departmentId", String(departmentId));
  }

  if (sortBy) {
    query.set("sortBy", sortBy);
  }

  if (sortOrder) {
    query.set("sortOrder", sortOrder);
  }

  const { response: res } = await authFetch(
    `${API_BASE_URL}/admin/users?${query.toString()}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return (await res.json()) as GetUsersResponse;
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
