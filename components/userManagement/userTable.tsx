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
import { Contact, DotSquareIcon, Droplets, MoreVertical } from "lucide-react";
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

const users: User[] = [
  {
    id: "EMP001",
    name: "John Smith",
    email: "john.smith@company.com",
    phone: "+1 234-567-8901",
    department: "IT",
    departmentId: "DPT001",
    role: "Developer",
    position: "Senior Developer",
    agency: "HQ",
    cotton: "A",
    line: "1",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    phone: "+1 234-567-8902",
    department: "HR",
    departmentId: "DPT002",
    role: "Manager",
    position: "HR Manager",
    agency: "HQ",
    cotton: "A",
    line: "2",
  },
  {
    id: "EMP003",
    name: "Michael Chen",
    email: "michael.c@company.com",
    phone: "+1 234-567-8903",
    department: "IT",
    departmentId: "DPT001",
    role: "Manager",
    position: "IT Manager",
    agency: "HQ",
    cotton: "B",
    line: "3",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    email: "emily.d@company.com",
    phone: "+1 234-567-8904",
    department: "Sales",
    departmentId: "DPT003",
    role: "Manager",
    position: "Sales Manager",
    agency: "Branch A",
    cotton: "C",
    line: "4",
  },
  {
    id: "EMP005",
    name: "Robert Wilson",
    email: "robert.w@company.com",
    phone: "+1 234-567-8905",
    department: "Operations",
    departmentId: "DPT004",
    role: "Manager",
    position: "Operations Manager",
    agency: "Branch B",
    cotton: "D",
    line: "5",
  },
  {
    id: "EMP006",
    name: "Lisa Anderson",
    email: "lisa.a@company.com",
    phone: "+1 234-567-8906",
    department: "Finance",
    departmentId: "DPT005",
    role: "Manager",
    position: "Finance Manager",
    agency: "HQ",
    cotton: "A",
    line: "6",
  },
  {
    id: "EMP007",
    name: "Alice Brown",
    email: "alice.b@company.com",
    phone: "+1 234-567-8907",
    department: "IT",
    departmentId: "DPT001",
    role: "Developer",
    position: "Junior Developer",
    agency: "HQ",
    cotton: "A",
    line: "1",
  },
  {
    id: "EMP008",
    name: "Bob Wilson",
    email: "bob.w@company.com",
    phone: "+1 234-567-8908",
    department: "IT",
    departmentId: "DPT001",
    role: "QA Engineer",
    position: "QA Engineer",
    agency: "HQ",
    cotton: "B",
    line: "2",
  },
  {
    id: "EMP009",
    name: "Carol Davis",
    email: "carol.d@company.com",
    phone: "+1 234-567-8909",
    department: "IT",
    departmentId: "DPT001",
    role: "Designer",
    position: "UI/UX Designer",
    agency: "HQ",
    cotton: "A",
    line: "3",
  },
  {
    id: "EMP010",
    name: "Tom Harris",
    email: "tom.h@company.com",
    phone: "+1 234-567-8910",
    department: "HR",
    departmentId: "DPT002",
    role: "HR Specialist",
    position: "HR Specialist",
    agency: "Branch A",
    cotton: "C",
    line: "4",
  },
];

function UserTable() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"view" | "edit" | "delete">("view");
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
              <TableCell className="text-right">{user.department}</TableCell>
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
                        setMode("view");
                        setSelectedUser(user);
                        setOpen(true);
                      }}
                    >
                      View Details
                    </DropdownMenuItem>

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
        {/* <DialogContent>
    {mode === "view" && <UserView user={selectedUser} />}
    {mode === "edit" && <UserEditForm user={selectedUser} />
    {mode === "delete" && (
      <ConfirmDelete
        onConfirm={() => deleteUser(selectedUser!.id)}
      />
    )}
  </DialogContent> */}
        <DialogContent>
          {mode === "view" && <div>View User - To be implemented</div>}
          {mode === "edit" && (
            <EditUserForm
              user={selectedUser ?? undefined}
              onClose={() => setOpen(false)}
            />
          )}
          {mode === "delete" && <div>Delete User - To be implemented</div>}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserTable;
