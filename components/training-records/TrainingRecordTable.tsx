import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { users } from "@/lib/data";
import { colors } from "@/lib/color";

function TrainingRecordTable() {
  return (
    <div className="relative w-full">
      <div className="overflow-x-auto">
        <Table className="min-w-[1200px] table-auto whitespace-nowrap rounded-t-md">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
            <TableRow>
              <TableHead className="w-[200px] font-bold">Course Code</TableHead>
              <TableHead className="w-[200px] font-bold">Course Name</TableHead>
              <TableHead className="w-[250px] font-bold">Location</TableHead>
              <TableHead className="text-right w-[300px] font-bold">
                Employee ID
              </TableHead>
              <TableHead className="text-right w-[150px] font-bold">
                Name-Surname
              </TableHead>

              <TableHead className="text-right w-[150px] font-bold">
                Actions
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
                <TableCell>hi</TableCell>
                <TableCell className="text-right">
                  {user.department.name}
                </TableCell>
                <TableCell className="text-right">{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default TrainingRecordTable;
