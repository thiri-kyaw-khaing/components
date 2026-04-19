import ButtonDialog from "@/components/dashboard/buttonDialog";
import PageHeader from "@/components/dashboard/pageHeader";
import UserForm from "@/components/userManagement/UserForm";
import UserManagementClient from "@/components/userManagement/UserManagementClient";
import { getUsers } from "@/lib/api/getUser";
import { getDepartments } from "@/lib/api/getDepartment";
import type { Department } from "@/app/types/department";
import type { UserMeta } from "@/app/types/userManagement";

type UserManagementProps = {
  searchParams?: Promise<{
    page?: string;
    limit?: string;
    search?: string;
    status?: string;
    departmentId?: string;
    sortBy?: string;
    sortOrder?: string;
  }>;
};

async function UserManagement({ searchParams }: UserManagementProps) {
  const resolvedSearchParams = await searchParams;
  const pageValue = Number(resolvedSearchParams?.page ?? "1");
  const limitValue = Number(resolvedSearchParams?.limit ?? "10");
  const search = (resolvedSearchParams?.search ?? "").trim();
  const status = (resolvedSearchParams?.status ?? "").trim();
  const departmentIdValue = Number(resolvedSearchParams?.departmentId ?? "0");
  const sortBy = (resolvedSearchParams?.sortBy ?? "employee_id").trim();
  const sortOrderValue = (resolvedSearchParams?.sortOrder ?? "asc").trim();

  const page = Number.isFinite(pageValue) && pageValue > 0 ? pageValue : 1;
  const limit =
    Number.isFinite(limitValue) && limitValue > 0 && limitValue <= 100
      ? limitValue
      : 10;
  const departmentId =
    Number.isFinite(departmentIdValue) && departmentIdValue > 0
      ? departmentIdValue
      : undefined;
  const sortOrder = sortOrderValue === "desc" ? "desc" : "asc";

  const userResponse = await getUsers({
    page,
    limit,
    search: search || undefined,
    status: status || undefined,
    departmentId,
    sortBy: sortBy || undefined,
    sortOrder,
  });
  const items = userResponse.data?.items ?? [];
  const meta: UserMeta =
    userResponse.data?.meta ??
    ({
      page,
      limit,
      totalItems: items.length,
      totalPages: 1,
    } as const);

  const departmentsResponse = await getDepartments();
  const departments: Department[] = departmentsResponse?.data?.items ?? [];

  return (
    <>
      <div className="min-h-screen space-y-4 m-2">
        <PageHeader
          title="User Management"
          subtitle="Manage users, assign roles, and view activity"
          action={
            <ButtonDialog name="Add User">
              <UserForm departments={departments} />
            </ButtonDialog>
          }
        />

        <UserManagementClient
          users={items}
          meta={meta}
          currentPage={page}
          currentLimit={limit}
          departments={departments}
          initialSearch={search}
          initialStatus={status}
          initialDepartmentId={departmentId ? String(departmentId) : ""}
          initialSortBy={sortBy}
          initialSortOrder={sortOrder}
        />
      </div>
    </>
  );
}

export default UserManagement;
