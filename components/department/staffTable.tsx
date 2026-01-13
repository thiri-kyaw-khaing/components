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
import React from "react";

import { Button } from "../ui/button";
import userTable from "../userManagement/userTable";

function StaffTable() {
  return (
    <>
      <Table className="table-fixed w-full">
        <TableCaption>A list of staffs</TableCaption>
        <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Employee ID</TableHead>
            <TableHead className="w-[200px] font-bold">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">EMP001</TableCell>
            <TableCell>John Smith</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default StaffTable;
