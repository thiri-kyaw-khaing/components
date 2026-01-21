import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import StaffTable from "./staffTable";
import { Department } from "@/app/types/department";

type Props = {
  department: Department | null;
  onClose: () => void;
};

function StaffDialog({ department, onClose }: Props) {
  return (
    <Dialog open={!!department} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{department?.name} - Staff List</DialogTitle>
          <DialogDescription>
            Total Staff : {department?.staff.length ?? 0}
          </DialogDescription>
        </DialogHeader>

        <StaffTable staff={department?.staff ?? []} />

        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default StaffDialog;
