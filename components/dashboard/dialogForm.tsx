"use client";
import { Button } from "@/components/ui/button";
import React, { useActionState, useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  CreateDepartmentAction,
  State,
} from "@/lib/actions/AdminDepartment/createDepartment";
import { Field, FieldGroup, FieldLabel } from "../ui/field";

// const formSchema = z.object({
//   name: z.string().min(2).max(50),
//   division: z.string().min(2).max(50),
// });

function DialogForm() {
  const initialState: State = { errors: {}, message: null };

  const [state, formAction, pending] = useActionState(
    CreateDepartmentAction,
    initialState,
  );
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     division: "",
  //   },
  // });

  return (
    <form action={formAction}>
      <DialogHeader>
        <DialogTitle>Add New Department</DialogTitle>
      </DialogHeader>

      <div className="grid gap-4 mt-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Add Department Name</FieldLabel>
            <Input
              id="name"
              type="text"
              placeholder="Enter Department Name"
              name="name"
              required
            />
          </Field>
        </FieldGroup>

        {/* Filter */}
        {/* Filter */}
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="division">Select Division</FieldLabel>

            <select
              id="division"
              name="division"
              required
              className="w-full border border-[#006022] rounded-md px-3 py-2"
            >
              <option value="">Select Division</option>

              <option value="Social Enterprise">Social Enterprise</option>

              <option value="Development Project">Development Project</option>

              <option value="Nature-based Solution and Special Project">
                Nature-based Solution and Special Project
              </option>

              <option value="Sustainability">Sustainability</option>

              <option value="Accounting and Finance">
                Accounting and Finance
              </option>

              <option value="Administration">Administration</option>

              <option value="Other (under CEO)">Other (under CEO)</option>
            </select>
          </Field>
        </FieldGroup>
      </div>

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <Button
          type="submit"
          className="bg-[#006022] text-white hover:bg-[#005018]"
        >
          Add Department
        </Button>
      </DialogFooter>
    </form>
  );
}

export default DialogForm;
