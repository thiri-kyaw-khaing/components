import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import { DialogTitle } from "../ui/dialog";
import { Department } from "@/app/types/department";

type props = {
  department: Department | null;
  onCancel: () => void;
  onConfirm: () => void;
};
function DeleteDepartmentDialog({ department, onCancel, onConfirm }: props) {
  return (
    <div>
      <Dialog open={true} onOpenChange={(o) => !o && onCancel()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-600">
              Delete Department
            </DialogTitle>
          </DialogHeader>

          <p>
            Are you sure you want to delete <strong>{department?.name}</strong>?
            This action cannot be undone.
          </p>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={onConfirm}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeleteDepartmentDialog;
