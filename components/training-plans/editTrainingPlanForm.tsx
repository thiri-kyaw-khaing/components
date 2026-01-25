"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { TrainingCategoryEnum, TrainingTypeEnum } from "@/lib/data";

import { z } from "zod";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import { Course } from "@/app/types/trainingPlan";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const createTrainingPlanSchema = z.object({
  title: z.string().min(2).max(50),
  speaker: z.string().min(2).max(50),

  category: z.enum(TrainingCategoryEnum),
  type: z.enum(TrainingTypeEnum),

  date: z.string().min(1),

  numberOfHours: z.coerce.number().int().min(1),
  numberOfDays: z.coerce.number().int().min(1),

  location: z.string().optional(),

  costPerPerson: z.coerce.number().min(0),
  numberOfPerson: z.coerce.number().min(1),

  budgetCode: z.string().optional(),

  content: z.string().min(10),
});

export type CreateTrainingPlanInput = z.infer<typeof createTrainingPlanSchema>;

export default function EditTrainingPlanForm({ course }: { course: Course }) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(createTrainingPlanSchema),
    defaultValues: {
      title: course.name || "",
      speaker: course.speakerInstitute || "",
      category: course.category || undefined,
      type: course.type || undefined,
      date: course.date || "",
      numberOfHours: course.numberOfHours || 1,
      numberOfDays: course.numberOfDays || 1,
      numberOfPerson: course.numberOfPerson || 1,
      costPerPerson: course.costPerPerson || 0,
      content: course.content || "",
      budgetCode: course.budgetCode || "",
      location: course.location || "",
    },
  });

  function onSubmit(values: CreateTrainingPlanInput) {
    console.log("CREATE", values);
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Training Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Speaker */}
              <FormField
                control={form.control}
                name="speaker"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Speaker / Trainer</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TrainingCategoryEnum.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TrainingTypeEnum.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {/* Date */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="e.g., Conference Room A or Online"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Budget Code */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="budgetCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Code</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={
                          field.value === undefined ? "" : String(field.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Cost Per Person */}
              <FormField
                control={form.control}
                name="costPerPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cost Per Person</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        value={
                          field.value === undefined ? "" : String(field.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="numberOfHours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hours</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        value={
                          field.value === undefined ? "" : String(field.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfDays"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Days</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        value={
                          field.value === undefined ? "" : String(field.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#006022] hover:bg-[#005018] text-white mt-4"
            >
              Create Training Plan
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
