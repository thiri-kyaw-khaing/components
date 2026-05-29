import React, { useActionState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import { DialogTitle } from "../ui/dialog";
import { Department } from "@/app/types/department";
import {
  DeleteDepartmentAction,
  State,
} from "@/lib/actions/AdminDepartment/deleteDepartment";

type props = {
  department: Department | null;
  onCancel: () => void;
  onConfirm: () => void;
};
function DeleteDepartmentDialog({ department, onCancel }: props) {
  const initialState: State = {
    errors: {},
    message: null,
  };

  const [state, formAction, pending] = useActionState(
    DeleteDepartmentAction.bind(null, Number(department?.id)),
    initialState,
  );

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
            <form action={formAction}>
              <Button
                type="submit"
                variant="destructive"
                disabled={pending}
                className="bg-[#006022] text-white"
              >
                {pending ? "Deleting..." : "Delete"}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeleteDepartmentDialog;
