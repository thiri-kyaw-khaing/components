"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { CreateUserAction, State } from "@/lib/actions/AdminUser/createUser";
import { useActionState } from "react";

function UserForm() {
  const initialState: State = {
    errors: {},
    message: null,
  };

  const [state, formAction, pending] = useActionState(
    CreateUserAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <DialogHeader>
        <DialogTitle>Add New User</DialogTitle>
      </DialogHeader>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input
              id="name"
              name="name"
              placeholder="Enter Full Name"
              required
            />
            {state?.errors?.name?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.name[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="employeeId">Employee ID</FieldLabel>
            <Input
              id="employeeId"
              name="employeeId"
              placeholder="e.g., EMP021"
              required
            />
            {state?.errors?.employeeId?.[0] ? (
              <p className="text-sm text-red-600">
                {state.errors.employeeId[0]}
              </p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@company.com"
              required
            />
            {state?.errors?.email?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.email[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input
              id="phone"
              name="phone"
              placeholder="e.g., +1234567890"
              required
            />
            {state?.errors?.phone?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.phone[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="departmentId">Department ID</FieldLabel>
            <Input
              id="departmentId"
              name="departmentId"
              placeholder="e.g., DPT001"
              required
            />
            {state?.errors?.departmentId?.[0] ? (
              <p className="text-sm text-red-600">
                {state.errors.departmentId[0]}
              </p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="role">Role</FieldLabel>
            <Input id="role" name="role" placeholder="e.g., Manager" required />
            {state?.errors?.role?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.role[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="position">Position</FieldLabel>
            <Input
              id="position"
              name="position"
              placeholder="e.g., Senior Developer"
              required
            />
            {state?.errors?.position?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.position[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>

        <div />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="status">User Status</FieldLabel>
            <select
              id="status"
              name="status"
              defaultValue="active"
              className="w-full border border-[#006022] rounded-md px-3 py-2"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
            {state?.errors?.status?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.status[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
            {state?.errors?.password?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.password[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      {state?.message ? (
        <p className="text-sm text-red-600 mt-4">{state.message}</p>
      ) : null}

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <Button
          type="submit"
          className="bg-[#006022] text-white hover:bg-[#005018]"
          disabled={pending}
        >
          {pending ? "Creating..." : "Create User"}
        </Button>
      </DialogFooter>
    </form>
  );
}

export default UserForm;
