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

export const createTrainingPlanSchema = z.object({
  title: z.string().min(2).max(50),
  speaker: z.string().min(2).max(50),

  category: z.enum(TrainingCategoryEnum),
  type: z.enum(TrainingTypeEnum),

  date: z.string().min(1),

  numberOfHours: z.coerce.number().min(1),
  numberOfDays: z.coerce.number().min(1),

  location: z.string().optional(),

  costPerPerson: z.coerce.number().min(0),
  numberOfPerson: z.coerce.number().min(1),

  budgetCode: z.string().optional(),

  content: z.string().min(10),
});

export type CreateTrainingPlanInput = z.infer<typeof createTrainingPlanSchema>;

export default function CreateTrainingPlanForm() {
  const form = useForm({
    resolver: zodResolver(createTrainingPlanSchema),
    defaultValues: {
      title: "",
      speaker: "",
      category: undefined,
      type: undefined,
      date: "",
      numberOfHours: 1,
      numberOfDays: 1,
      numberOfPerson: 1,
      costPerPerson: 0,
      content: "",
      budgetCode: "",
    },
  });

  function onSubmit(values: CreateTrainingPlanInput) {
    console.log("CREATE", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <DialogHeader>
          <DialogTitle>Edit Department</DialogTitle>
        </DialogHeader>
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

        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
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
                  <SelectTrigger>
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

        {/* Numbers */}
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
                    value={field.value === undefined ? "" : String(field.value)}
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
                    value={field.value === undefined ? "" : String(field.value)}
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

        <Button type="submit" className="w-full">
          Create Training Plan
        </Button>
      </form>
    </Form>
  );
}
