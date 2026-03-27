"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import { useActionState } from "react";
import {
  CreateTrainingPlanAction,
  State,
} from "@/lib/actions/AdminTrainingPlan/createTrainingPlan";
import { TrainingCategoryEnum, TrainingTypeEnum } from "@/lib/data";

export default function CreateTrainingPlanForm() {
  const initialState: State = {
    errors: {},
    message: null,
  };

  const [state, formAction, pending] = useActionState(
    CreateTrainingPlanAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <DialogHeader>
        <DialogTitle>Add Training Plan</DialogTitle>
      </DialogHeader>

      <div className="grid grid-cols-2 gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">Training Title</FieldLabel>
            <Input id="title" name="title" required />
            {state.errors?.title?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.title[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="speaker">Speaker / Trainer</FieldLabel>
            <Input id="speaker" name="speaker" required />
            {state.errors?.speaker?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.speaker[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <select
              id="category"
              name="category"
              defaultValue=""
              className="w-full border border-[#006022] rounded-md px-3 py-2"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {TrainingCategoryEnum.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {state.errors?.category?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.category[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="type">Type</FieldLabel>
            <select
              id="type"
              name="type"
              defaultValue=""
              className="w-full border border-[#006022] rounded-md px-3 py-2"
              required
            >
              <option value="" disabled>
                Select type
              </option>
              {TrainingTypeEnum.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {state.errors?.type?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.type[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="date">Date</FieldLabel>
            <Input id="date" name="date" type="date" required />
            {state.errors?.date?.[0] ? (
              <p className="text-sm text-red-600">{state.errors.date[0]}</p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <Input
              id="location"
              name="location"
              placeholder="e.g., Conference Room A or Online"
            />
          </Field>
        </FieldGroup>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="budgetCode">Budget Code</FieldLabel>
            <Input id="budgetCode" name="budgetCode" />
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="costPerPerson">Cost Per Person</FieldLabel>
            <Input
              id="costPerPerson"
              name="costPerPerson"
              type="number"
              min={0}
              defaultValue={0}
              required
            />
            {state.errors?.costPerPerson?.[0] ? (
              <p className="text-sm text-red-600">
                {state.errors.costPerPerson[0]}
              </p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="numberOfHours">Hours</FieldLabel>
            <Input
              id="numberOfHours"
              name="numberOfHours"
              type="number"
              min={1}
              defaultValue={1}
              required
            />
            {state.errors?.numberOfHours?.[0] ? (
              <p className="text-sm text-red-600">
                {state.errors.numberOfHours[0]}
              </p>
            ) : null}
          </Field>
        </FieldGroup>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="numberOfDays">Days</FieldLabel>
            <Input
              id="numberOfDays"
              name="numberOfDays"
              type="number"
              min={1}
              defaultValue={1}
              required
            />
            {state.errors?.numberOfDays?.[0] ? (
              <p className="text-sm text-red-600">
                {state.errors.numberOfDays[0]}
              </p>
            ) : null}
          </Field>
        </FieldGroup>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="numberOfPerson">Number Of Person</FieldLabel>
          <Input
            id="numberOfPerson"
            name="numberOfPerson"
            type="number"
            min={1}
            defaultValue={1}
            required
          />
          {state.errors?.numberOfPerson?.[0] ? (
            <p className="text-sm text-red-600">{state.errors.numberOfPerson[0]}</p>
          ) : null}
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="content">Content</FieldLabel>
          <Textarea id="content" name="content" rows={4} required />
          {state.errors?.content?.[0] ? (
            <p className="text-sm text-red-600">{state.errors.content[0]}</p>
          ) : null}
        </Field>
      </FieldGroup>

      {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

      <Button
        type="submit"
        className="w-full bg-[#006022] hover:bg-[#005018] text-white mt-4"
        disabled={pending}
      >
        {pending ? "Creating..." : "Create Training Plan"}
      </Button>
    </form>
  );
}
