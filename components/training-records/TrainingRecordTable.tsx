import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ojtRecords, users } from "@/lib/data";
import { colors } from "@/lib/color";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

function TrainingRecordTable() {
  return (
    <div className="overflow-x-auto rounded-md border">
      <div
        className="flex justify-end p-2"
        style={{ backgroundColor: colors.secondary }}
      >
        <Button variant="outline" className="gap-2 bg-[#006022] text-white hover:bg-[#005018]">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      <Table className="w-full table-fixed text-sm">
        <TableCaption>A list of training plans</TableCaption>

        <TableHeader style={{ backgroundColor: colors.secondary }}>
          <TableRow>
            <TableHead className="w-[250px] font-semibold">
              Training Plan
            </TableHead>
            <TableHead className="w-[150px] font-semibold">Location</TableHead>
            <TableHead className="w-[140px] font-semibold">
              Cost Per Person
            </TableHead>
            <TableHead className="w-[140px] font-semibold">
              Budget Code
            </TableHead>
            <TableHead className="w-[120px] font-semibold">
              Employee ID
            </TableHead>
            <TableHead className="w-[160px] font-semibold">
              Name-Surname
            </TableHead>
            <TableHead className="w-[140px] font-semibold">Position</TableHead>
            <TableHead className="w-[140px] font-semibold">
              Department
            </TableHead>
            <TableHead className="w-[180px] font-semibold">Division</TableHead>
            <TableHead className="w-[120px] font-semibold">Status</TableHead>
            <TableHead className="w-[160px] font-semibold">
              Pre/Post Test Score
            </TableHead>
            <TableHead className="w-[120px] font-semibold">
              Evaluation
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {ojtRecords.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="max-w-[180px] line-clamp-2 break-words">
                  {user.course.name}
                </div>
              </TableCell>

              <TableCell>
                <div className="max-w-[140px] line-clamp-2 break-words">
                  {user.course.location}
                </div>
              </TableCell>

              <TableCell className="text-center">
                {user.course.costPerPerson}
              </TableCell>

              <TableCell>
                <div className="max-w-[140px] line-clamp-2 break-words">
                  {user.course.budgetCode}
                </div>
              </TableCell>

              <TableCell>{user.staff.id}</TableCell>

              <TableCell>
                <div className="max-w-[160px] line-clamp-2 break-words">
                  {user.staff.name}
                </div>
              </TableCell>

              <TableCell>
                <div className="max-w-[140px] line-clamp-2 break-words">
                  {user.staff.position}
                </div>
              </TableCell>

              <TableCell className="text-center">
                <div className="max-w-[140px] line-clamp-2 break-words">
                  {user.staff.department?.name}
                </div>
              </TableCell>

              <TableCell>
                <div className="max-w-[180px] line-clamp-2 break-words">
                  {user.staff.department?.division}
                </div>
              </TableCell>

              <TableCell>{user.status}</TableCell>

              <TableCell className="text-center">85</TableCell>

              <TableCell>Excellent</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TrainingRecordTable;
