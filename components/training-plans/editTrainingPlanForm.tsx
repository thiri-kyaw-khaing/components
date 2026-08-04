"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@/app/types/trainingPlan";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import {
  EditTrainingPlanAction,
  State,
} from "@/lib/actions/AdminTrainingPlan/editTrainingPlan";
import { TrainingCategoryEnum, TrainingTypeEnum } from "@/lib/data";

export default function EditTrainingPlanForm({ course }: { course: Course }) {
  const router = useRouter();
  const formattedDate = course.date
    ? new Date(course.date).toISOString().split("T")[0]
    : "";

  const initialState: State = {
    errors: {},
    message: null,
  };

  const [state, formAction, pending] = useActionState(
    EditTrainingPlanAction.bind(null, String(course.id)),
    initialState,
  );

  return (
    <>
      <div className="m-6 space-y-4">
        <Button
          variant={"outline"}
          className="text-[#006022] border-[#006022]"
          onClick={() => {
            router.push("/training-plans");
          }}
        >
          <ArrowLeft />
          Back to Training Plans
        </Button>
        <h1 className="text-xl font-bold">Edit Training Plan</h1>
        <span>Update Training Plan Details</span>
      </div>

      <div className="m-6 rounded-md border p-6 shadow-md">
        <h1 className="text-lg font-semibold mb-4">Training Plan Details</h1>

        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Training Title</FieldLabel>
                <Input
                  id="title"
                  name="title"
                  defaultValue={course.name}
                  required
                />
                {state?.errors?.title?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.title?.[0]}
                  </p>
                ) : null}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="speaker">Speaker / Trainer</FieldLabel>
                <Input
                  id="speaker"
                  name="speaker"
                  defaultValue={course.speakerInstitute}
                  required
                />
                {state?.errors?.speaker?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.speaker?.[0]}
                  </p>
                ) : null}
              </Field>
            </FieldGroup>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="category">Category</FieldLabel>
                <select
                  id="category"
                  name="category"
                  defaultValue={course.category}
                  className="w-full border border-[#006022] rounded-md px-3 py-2"
                  required
                >
                  {TrainingCategoryEnum.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {state?.errors?.category?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.category?.[0]}
                  </p>
                ) : null}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="type">Type</FieldLabel>
                <select
                  id="type"
                  name="type"
                  defaultValue={course.type}
                  className="w-full border border-[#006022] rounded-md px-3 py-2"
                  required
                >
                  {TrainingTypeEnum.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {state?.errors?.type?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.type?.[0]}
                  </p>
                ) : null}
              </Field>
            </FieldGroup>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="date">Date</FieldLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  defaultValue={formattedDate}
                  required
                />

                {state?.errors?.date?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.date?.[0]}
                  </p>
                ) : null}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <Input
                  id="location"
                  name="location"
                  defaultValue={course.location}
                />
              </Field>
            </FieldGroup>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="budgetCode">Budget Code</FieldLabel>
                <Input
                  id="budgetCode"
                  name="budgetCode"
                  defaultValue={course.budgetCode}
                />
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
                  defaultValue={course.costPerPerson}
                  required
                />
                {state?.errors?.costPerPerson?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.costPerPerson?.[0]}
                  </p>
                ) : null}
              </Field>
            </FieldGroup>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="numberOfHours">Hours</FieldLabel>
                <Input
                  id="numberOfHours"
                  name="numberOfHours"
                  type="number"
                  min={1}
                  defaultValue={course.numberOfHours}
                  required
                />
                {state?.errors?.numberOfHours?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.numberOfHours?.[0]}
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
                  defaultValue={course.numberOfDays}
                  required
                />
                {state?.errors?.numberOfDays?.[0] ? (
                  <p className="text-sm text-red-600">
                    {state?.errors?.numberOfDays?.[0]}
                  </p>
                ) : null}
              </Field>
            </FieldGroup>
          </div>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="content">Content</FieldLabel>
              <Textarea
                id="content"
                name="content"
                rows={4}
                defaultValue={course.content ?? ""}
                required
              />
              {state?.errors?.content?.[0] ? (
                <p className="text-sm text-red-600">
                  {state?.errors?.content?.[0]}
                </p>
              ) : null}
            </Field>
          </FieldGroup>

          {state?.message ? (
            <p className="text-sm text-red-600">{state?.message}</p>
          ) : null}

          <div className="justify-end gap-6 flex">
            <Button
              type="button"
              variant={"outline"}
              className=" text-[#006022] mt-4"
              onClick={() => {
                router.push("/training-plans");
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#006022] hover:bg-[#005018] text-white mt-4"
              disabled={pending}
            >
              {pending ? "Updating..." : "Update Training Plan"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
