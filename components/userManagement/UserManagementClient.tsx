"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import UserTable from "@/components/userManagement/userTable";
import type { Department } from "@/app/types/department";
import type { UserList, UserMeta } from "@/app/types/userManagement";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type UserManagementClientProps = {
  users: UserList[];
  meta: UserMeta;
  currentPage: number;
  currentLimit: number;
  departments: Department[];
  initialSearch?: string;
  initialStatus?: string;
  initialDepartmentId?: string;
  initialSortBy?: string;
  initialSortOrder?: "asc" | "desc";
};

export default function UserManagementClient({
  users,
  meta,
  currentPage,
  currentLimit,
  departments,
  initialSearch = "",
  initialStatus = "",
  initialDepartmentId = "",
  initialSortBy = "employee_id",
  initialSortOrder = "asc",
}: UserManagementClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(initialSearch);
  const [status, setStatus] = useState(initialStatus);
  const [departmentId, setDepartmentId] = useState(initialDepartmentId);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(initialSortOrder);

  useEffect(() => {
    setSearch(initialSearch);
    setStatus(initialStatus);
    setDepartmentId(initialDepartmentId);
    setSortOrder(initialSortOrder);
  }, [initialSearch, initialStatus, initialDepartmentId, initialSortOrder]);

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    const trimmedSearch = search.trim();
    const trimmedStatus = status.trim();
    const trimmedDepartmentId = departmentId.trim();
    const trimmedSortBy = sortBy.trim();

    if (trimmedSearch) {
      params.set("search", trimmedSearch);
      params.set("page", "1");
    } else {
      params.delete("search");
      params.set("page", "1");
    }

    if (trimmedStatus) {
      params.set("status", trimmedStatus);
    } else {
      params.delete("status");
    }

    if (trimmedDepartmentId) {
      params.set("departmentId", trimmedDepartmentId);
    } else {
      params.delete("departmentId");
    }

    params.set("sortOrder", sortOrder);

    params.set("limit", String(currentLimit));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center gap-4 my-4 justify-between">
        <form
          className="flex flex-col gap-3 w-full"
          onSubmit={(event) => {
            event.preventDefault();
            applyFilters();
          }}
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, email, or employee ID..."
                className="pl-9 border-[#006022] text-sm h-9"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <select
              className="w-full border border-[#006022] rounded-md px-2 py-1.5 text-sm h-9"
              value={departmentId}
              onChange={(event) => setDepartmentId(event.target.value)}
            >
              <option value="">All departments</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name} ({department.division})
                </option>
              ))}
            </select>

            <select
              className="w-full border border-[#006022] rounded-md px-2 py-1.5 text-sm h-9"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="">All statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
            <div className="w-full justify-end">
              <Button
                type="submit"
                className="bg-[#006022] text-white hover:bg-[#005018] px-6  w-40"
              >
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <UserTable
          users={users}
          departments={departments}
          meta={meta}
          currentPage={currentPage}
          currentLimit={currentLimit}
        />
      </div>
    </>
  );
}
