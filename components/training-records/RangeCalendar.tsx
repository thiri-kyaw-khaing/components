"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { type DateRange } from "react-day-picker";

type Props = {
  value?: DateRange;
  onChange: (value: DateRange | undefined) => void;
};

export default function CalendarRange({ value, onChange }: Props) {
  return (
    <Card className="w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={value?.from}
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
          showOutsideDays={false}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
        />
      </CardContent>
    </Card>
  );
}
