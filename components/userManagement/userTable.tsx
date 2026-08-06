"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { colors } from "@/lib/color";
import { MoreVertical } from "lucide-react";
import React, { useState } from "react";
import ContactInfo from "./contact";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Dialog, DialogContent } from "../ui/dialog";
import EditUserForm from "./EditUserForm";
import { UserList, UserMeta } from "@/app/types/userManagement";
import { Department } from "@/app/types/department";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DeleteUserDialog } from "./DeleteUserDialog";

type UserTableProps = {
  users: UserList[];
  departments: Department[];
  meta: UserMeta;
  currentPage: number;
  currentLimit: number;
};

function UserTable({
  users,
  departments,
  meta,
  currentPage,
  currentLimit,
}: UserTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"edit" | "delete">("edit");
  const [selectedUser, setSelectedUser] = useState<UserList | null>(null);

  const handlePageChange = (targetPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(targetPage));
    params.set("limit", String(currentLimit));
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <div className="overflow-x-auto border rounded-md">
        <Table className="w-full min-w-[1300px] rounded-t-md">
          <TableHeader
            className="rounded-t-md"
            style={{ backgroundColor: colors.secondary }}
          >
            <TableRow>
              <TableHead className="w-[120px] font-bold whitespace-nowrap">
                Employee ID
              </TableHead>
              <TableHead className="w-[200px] font-bold whitespace-nowrap">
                Role
              </TableHead>
              <TableHead className="w-[150px] font-bold whitespace-nowrap">
                Name
              </TableHead>
              <TableHead className="w-[250px] font-bold whitespace-nowrap">
                Contact
              </TableHead>
              <TableHead className="text-left w-[150px] font-bold whitespace-nowrap">
                Department
              </TableHead>
              <TableHead className="text-left w-[120px] font-bold whitespace-nowrap">
                Dept ID
              </TableHead>
              <TableHead className="text-left w-[150px] font-bold whitespace-nowrap">
                Position
              </TableHead>

              <TableHead className="text-left w-[130px] font-bold whitespace-nowrap">
                Status
              </TableHead>
              <TableHead className="w-[110px] font-bold whitespace-nowrap text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="text-center py-8 text-gray-500"
                >
                  No users found.
                </TableCell>
              </TableRow>
            ) : null}
            {users.map((user) => (
              <TableRow key={user.employeeId}>
                <TableCell className="font-medium">{user.employeeId}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>
                  <ContactInfo email={user.email} phone={user.phone} />
                </TableCell>
                <TableCell className="text-left">
                  {user.departmentName}
                </TableCell>
                <TableCell className="text-left">{user.departmentId}</TableCell>
                <TableCell className="text-left">{user.jobRole}</TableCell>
                <TableCell className="text-left">{user.status}</TableCell>

                <TableCell className="">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => {
                          setMode("edit");
                          setSelectedUser(user);
                          setOpen(true);
                        }}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          router.push(`/user-management/${user.id}`)
                        }
                      >
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => {
                          setMode("delete");
                          setSelectedUser(user);
                          setOpen(true);
                        }}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-3 py-4 border-t">
          <p className="text-sm text-muted-foreground">
            Page {meta.page} of {meta.totalPages} ({meta.totalItems} total
            staffs)
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= meta.totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            {mode === "edit" && (
              <EditUserForm
                user={selectedUser ?? undefined}
                departments={departments}
                onClose={() => setOpen(false)}
              />
            )}
            {mode === "delete" && (
              <DeleteUserDialog
                user={selectedUser!}
                onConfirm={() => {
                  setOpen(false);
                }}
                onCancel={() => setOpen(false)}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default UserTable;
