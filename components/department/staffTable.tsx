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
import { Staff } from "@/app/types/department";
import { Card, CardContent } from "../ui/card";

type StaffTableProps = {
  staff?: Staff[];
};

function StaffTable({ staff }: StaffTableProps) {
  if (!staff || staff.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <Card>
          <CardContent className="text-center text-gray-500 py-10">
            No staff members found for this department.
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border rounded-md">
      <Table className="table-fixed w-full">
        <TableCaption>Staff list</TableCaption>
        <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
          <TableRow>
            <TableHead className="w-[120px] font-bold">Employee ID</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold w-[200px]">Email</TableHead>
            <TableHead className="font-bold w-[150px]">Phone</TableHead>
            <TableHead className="font-bold w-[150px]">Department ID</TableHead>
            <TableHead className="font-bold w-[180px]">Role</TableHead>

            <TableHead className="font-bold ">Status</TableHead>

            <TableHead className="font-bold">Position</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {staff.map((member) => (
            <TableRow key={member.employeeID}>
              <TableCell className="font-medium">{member.employeeID}</TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell>{member.departmentId}</TableCell>
              <TableCell className="">{member.role}</TableCell>
              <TableCell>{member.status}</TableCell>
              <TableCell>{member.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default StaffTable;
