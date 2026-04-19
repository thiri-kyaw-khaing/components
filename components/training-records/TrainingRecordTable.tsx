import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { colors } from "@/lib/color";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import type { TrainingRecord, TrainingRecordMeta } from "@/app/types/record";

type Props = {
  records: TrainingRecord[];
  meta: TrainingRecordMeta;
  currentPage: number;
  onPageChange: (page: number) => void;
};
function TrainingRecordTable({
  records,
  meta,
  currentPage,
  onPageChange,
}: Props) {
  const displayRecords = records ?? [];
  console.log("Displaying records:", displayRecords);

  if (displayRecords.length === 0) {
    return (
      <div className="rounded-md border p-6 text-center">
        <p className="text-gray-500 font-medium">
          No training records found. Use the filters and click Search to view
          records.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-md border">
      <div
        className="flex justify-end p-2"
        style={{ backgroundColor: colors.secondary }}
      >
        <Button
          variant="outline"
          className="gap-2 bg-[#006022] text-white hover:bg-[#005018]"
        >
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
              Pre Test Score
            </TableHead>
            <TableHead className="w-[160px] font-semibold">
              Post Test Score
            </TableHead>
            <TableHead className="w-[120px] font-semibold">
              Evaluation
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {displayRecords.map((record) => (
            <TableRow key={record.id}>
              <TableCell>
                <div className="max-w-[180px] line-clamp-2 whitespace-pre-line break-words">
                  {record.trainingPlanName}
                </div>
              </TableCell>

              <TableCell>
                <div className="max-w-[140px] whitespace-pre-line line-clamp-2 break-words">
                  {record.location}
                </div>
              </TableCell>

              <TableCell className="text-center">
                {record.costPerPerson}
              </TableCell>

              <TableCell>
                <div className="max-w-[140px] line-clamp-2 break-words">
                  {record.budgetCode}
                </div>
              </TableCell>

              <TableCell>{record.employeeId}</TableCell>

              <TableCell>
                <div className="max-w-[160px] line-clamp-2 break-words">
                  {record.employeeName}
                </div>
              </TableCell>

              <TableCell>
                <div className="max-w-[140px] line-clamp-2 break-words">
                  {record.position}
                </div>
              </TableCell>

              <TableCell className="text-center">
                <div className="max-w-[140px] line-clamp-2 break-words">
                  {record.department}
                </div>
              </TableCell>

              <TableCell>
                <div className="max-w-[180px] line-clamp-2 break-words">
                  {record.division}
                </div>
              </TableCell>

              <TableCell>{record.status}</TableCell>

              <TableCell className="text-center">
                {record.preTestScore}
              </TableCell>
              <TableCell className="text-center">
                {record.postTestScore}
              </TableCell>

              <TableCell>
                {record.evaluation ? record.evaluation : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-3 py-4 border-t">
        <p className="text-sm text-muted-foreground">
          Page {meta.page} of {meta.totalPages} ({meta.totalItems} total items)
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage >= meta.totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TrainingRecordTable;
