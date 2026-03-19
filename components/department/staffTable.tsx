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

type StaffTableProps = {
  staff: Staff[];
};

function StaffTable({ staff }: StaffTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table className="table-fixed w-full border rounded-md">
        <TableCaption>Staff list</TableCaption>
        <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
          <TableRow>
            <TableHead className="w-[120px] font-bold">Employee ID</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Email</TableHead>
            <TableHead className="font-bold">Phone</TableHead>
            <TableHead className="font-bold">Department ID</TableHead>
            <TableHead className="font-bold">Department</TableHead>
            <TableHead className="font-bold">Role</TableHead>

            <TableHead className="font-bold">Status</TableHead>

            <TableHead className="font-bold">Position</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {staff.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={3}
                className="text-center text-muted-foreground"
              >
                No staff found
              </TableCell>
            </TableRow>
          ) : (
            staff.map((member) => (
              <TableRow key={member.employeeID}>
                <TableCell className="font-medium">
                  {member.employeeID}
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>{member.departmentId}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.status}</TableCell>
                <TableCell>{member.position}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default StaffTable;
