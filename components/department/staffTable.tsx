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
    <Table className="table-fixed w-full">
      <TableCaption>Staff list</TableCaption>
      <TableHeader className={`bg-[${colors.secondary}] rounded-t-md`}>
        <TableRow>
          <TableHead className="w-[120px] font-bold">Employee ID</TableHead>
          <TableHead className="font-bold">Name</TableHead>
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
            <TableRow key={member.id}>
              <TableCell className="font-medium">{member.id}</TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.position}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default StaffTable;
