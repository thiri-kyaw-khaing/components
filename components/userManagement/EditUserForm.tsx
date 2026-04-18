"use client";

import { UserList } from "@/app/types/userManagement";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
type UserEditFormProps = {
  user?: UserList;
  onClose: () => void;
};
import { useActionState } from "react";
import { EditUserAction, State } from "@/lib/actions/AdminUser/editUser";
import { startOfDecade } from "date-fns";

function EditUserForm({ user, onClose }: UserEditFormProps) {
  const initialState: State = {
    errors: {},
    message: null,
  };

  const [state, formAction, pending] = useActionState(
    EditUserAction.bind(null, String(user?.id) ?? ""),
    initialState,
  );
  const safeState = state ?? initialState;

  return (
    <div>
      <form action={formAction}>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                defaultValue={user?.fullName ?? ""}
                required
              />
              {safeState.errors?.name?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.name[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="employeeId">Employee ID</FieldLabel>
              <Input
                id="employeeId"
                name="employeeId"
                defaultValue={user?.employeeId ?? ""}
                required
              />
              {safeState.errors?.employeeId?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.employeeId[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="departmentId">Department ID</FieldLabel>
              <Input
                id="departmentId"
                name="departmentId"
                defaultValue={user?.departmentId ?? ""}
                required
              />
              {safeState.errors?.departmentId?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.departmentId[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input
                id="phone"
                name="phone"
                defaultValue={user?.phone ?? ""}
                required
              />
              {safeState.errors?.phone?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.phone[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={user?.email ?? ""}
                required
              />
              {safeState.errors?.email?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.email[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="role">Role</FieldLabel>
              <Input
                id="role"
                name="role"
                defaultValue={user?.role ?? ""}
                required
              />
              {safeState.errors?.role?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.role[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="position">Position</FieldLabel>
              <Input
                id="position"
                name="position"
                defaultValue={user?.jobRole ?? ""}
                placeholder="e.g., Senior Developer"
                required
              />
              {safeState.errors?.position?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.position[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="status">User Status</FieldLabel>
              <select
                id="status"
                name="status"
                defaultValue={user?.status ?? "active"}
                className="w-full border border-[#006022] rounded-md px-3 py-2"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
              {safeState.errors?.status?.[0] ? (
                <p className="text-sm text-red-600">
                  {safeState.errors.status[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>
        </div>

        {safeState.message ? (
          <p className="text-sm text-red-600 mt-4">{safeState.message}</p>
        ) : null}

        <DialogFooter className="mt-6">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#006022] text-white hover:bg-[#005018]"
            disabled={pending}
          >
            {pending ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </form>
    </div>
  );
}

export default EditUserForm;
