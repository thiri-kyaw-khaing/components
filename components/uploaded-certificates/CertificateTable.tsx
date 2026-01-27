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
import { certificates } from "@/lib/data";
import { colors } from "@/lib/color";

function CertificateTable() {
  return (
    <div>
      <Table className="table-fixed w-full rounded-t-md ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
          <TableRow>
            <TableHead className="w-[200px] font-bold">Employee ID</TableHead>
            <TableHead className="w-[200px] font-bold">Employee Name</TableHead>
            <TableHead className="w-[250px] font-bold">Department</TableHead>
            <TableHead className="text-right w-[300px] font-bold">
              Training Name
            </TableHead>
            <TableHead className="text-right w-[150px] font-bold">
              Category
            </TableHead>

            <TableHead className="text-right w-[150px] font-bold">
              Upload Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map((certificate) => (
            <TableRow key={certificate.id}>
              <TableCell className="font-medium">{certificate.id}</TableCell>
              <TableCell>{certificate.trainingName}</TableCell>

              <TableCell className="text-right">
                {certificate.trainingName}
              </TableCell>
              <TableCell className="text-right">{certificate.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CertificateTable;
