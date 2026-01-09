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
import ContactInfo from "./contact";
import { Button } from "../ui/button";

function userTable() {
  return (
    <>
      <Table className="table-fixed w-full">
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
          <TableRow>
            <TableCell className="font-medium">EMP001</TableCell>
            <TableCell>John Smith</TableCell>
            <TableCell>
              <ContactInfo email="thiri@gmail.com" phone="09753244464" />
            </TableCell>
            <TableCell className="text-right">IT</TableCell>
            <TableCell className="text-right">Administrator</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon-sm">
                <MoreVertical />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default userTable;
