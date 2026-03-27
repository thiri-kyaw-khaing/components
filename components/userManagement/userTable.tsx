"use client";
import {
  Table,
  TableBody,
  TableCaption,
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
import { User } from "@/app/types/userManagement";
import { useRouter } from "next/navigation";
import { DeleteUserDialog } from "./DeleteUserDialog";

function UserTable({ users }: { users: User[] }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"edit" | "delete">("edit");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  return (
    <>
      <div className="overflow-x-auto border rounded-md">
        <Table className="table-fixed w-full rounded-t-md ">
          <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
            <TableRow>
              <TableHead className="w-50 font-bold">Employee ID</TableHead>
              <TableHead className="w-50 font-bold">Name</TableHead>
              <TableHead className="w-50 font-bold">Contact</TableHead>
              <TableHead className="text-left w-50 font-bold">
                Department
              </TableHead>
              <TableHead className="text-left w-37.5 font-bold">
                Dept ID
              </TableHead>
              <TableHead className="text-left w-50 font-bold">
                Role
              </TableHead>

              <TableHead className="text-left w-37.5 font-bold">
                Status
              </TableHead>
              <TableHead className="text-right w-37.5 font-bold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.employeeId}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>
                  <ContactInfo email={user.email} phone={user.phone} />
                </TableCell>
                <TableCell className="text-left">
                  {user.departmentName}
                </TableCell>
                <TableCell className="text-left">
                  {user.departmentId}
                </TableCell>
                <TableCell className="text-left">{user.jobRole}</TableCell>
                <TableCell className="text-left">{user.status}</TableCell>

                <TableCell className="text-right">
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
                          router.push(`/user-management/${user.employeeId}`)
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
