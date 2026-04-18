import { UserList } from "@/app/types/userManagement";
import { Button } from "../ui/button";
import { DialogTitle } from "../ui/dialog";
import { useActionState } from "react";
import { DeleteUserAction, State } from "@/lib/actions/AdminUser/deleteUser";

type Props = {
  user: UserList;
  onConfirm: () => void;
  onCancel: () => void;
};

export function DeleteUserDialog({ user, onConfirm, onCancel }: Props) {
  const initialState: State = {
    message: null,
  };

  const [state, formAction, pending] = useActionState(
    DeleteUserAction.bind(null, String(user.id)),
    initialState,
  );

  return (
    <div className="space-y-4">
      <DialogTitle className="text-lg font-semibold text-red-600">
        Delete User
      </DialogTitle>

      <p className="text-sm">
        Are you sure you want to delete{" "}
        <span className="font-medium">{user.fullName}</span>? This action cannot
        be undone.
      </p>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <form action={formAction}>
          <Button variant="destructive" type="submit" disabled={pending}>
            {pending ? "Deleting..." : "Delete"}
          </Button>
        </form>
      </div>

      {state && state.message ? (
        <p className="text-sm text-red-600">{state.message}</p>
      ) : null}
    </div>
  );
}
