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
import { UserList } from "@/app/types/userManagement";
import { useRouter } from "next/navigation";
import { DeleteUserDialog } from "./DeleteUserDialog";

function UserTable({ users }: { users: UserList[] }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"edit" | "delete">("edit");
  const [selectedUser, setSelectedUser] = useState<UserList | null>(null);
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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            {mode === "edit" && (
              <EditUserForm
                user={selectedUser ?? undefined}
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
