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
import {
  Contact,
  Delete,
  DotSquareIcon,
  Droplets,
  MoreVertical,
} from "lucide-react";
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
import { users } from "@/lib/data";
import { DeleteUserDialog } from "./DeleteUserDialog";

function UserTable() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"edit" | "delete">("edit");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  return (
    <>
      <Table className="table-fixed w-full rounded-t-md ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Employee ID</TableHead>
            <TableHead className="w-[200px] font-bold">Name</TableHead>
            <TableHead className="w-[250px] font-bold">Contact</TableHead>
            <TableHead className="text-right w-[300px] font-bold">
              Department
            </TableHead>
            <TableHead className="text-right w-[150px] font-bold">
              Role
            </TableHead>

            <TableHead className="text-right w-[150px] font-bold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <ContactInfo email={user.email} phone={user.phone} />
              </TableCell>
              <TableCell className="text-right">
                {user.department.name}
              </TableCell>
              <TableCell className="text-right">{user.role}</TableCell>
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
                      onClick={() => router.push(`/user-management/${user.id}`)}
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
                // deleteUser(selectedUser!.id);
                setOpen(false);
              }}
              onCancel={() => setOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserTable;
