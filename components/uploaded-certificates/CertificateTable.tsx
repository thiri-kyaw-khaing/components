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
            <TableHead className="w-[300px] font-bold">Employee Name</TableHead>
            <TableHead className="w-[200px] font-bold text-left">
              Department
            </TableHead>
            <TableHead className="w-[200px] font-bold text-left">
              Division
            </TableHead>

            <TableHead className="text-right w-[250px] font-bold">
              Training Name
            </TableHead>

            <TableHead className="text-right w-[150px] font-bold">
              Status
            </TableHead>
            <TableHead className="text-right w-[150px] font-bold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map((certificate) => (
            <TableRow key={certificate.id}>
              {/* Employee ID */}
              <TableCell className="w-[200px] font-medium">
                {certificate.employeeId || "-"}
              </TableCell>
              {/* Employee Name */}
              <TableCell className="w-[300px]">
                <div className="max-w-[280px] line-clamp-2 break-words">
                  {certificate.userName}
                </div>
              </TableCell>
              {/* Department */}
              <TableCell className="w-[200px] text-left">
                {certificate.department}
              </TableCell>
              {/* Division */}
              <TableCell className="w-[200px] text-left">
                <div className="max-w-[180px] line-clamp-2 break-words">
                  {certificate.division}
                </div>
              </TableCell>

              {/* Training Name */}
              <TableCell className="w-[250px] text-right">
                <div className="ml-auto line-clamp-2 break-words">
                  {certificate.trainingName}
                </div>
              </TableCell>
              {/* Status */}
              <TableCell className="w-[150px] text-right">
                {certificate.status}
              </TableCell>
              {/* Action */}
              <TableCell className="w-[150px] text-right">
                <button className="text-blue-600 hover:underline text-sm">
                  View
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CertificateTable;
