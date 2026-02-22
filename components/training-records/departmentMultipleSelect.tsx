"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

const CATEGORIES = [
  { id: "1", name: "สนับสนุนนโยบายสิ่งแวดล้อม" },
  { id: "2", name: "ความปลอดภัยและอาชีวอนามัย" },
  { id: "3", name: "งานขายและงานบริการ" },
  { id: "4", name: "การใช้งาน Software" },
  { id: "5", name: "การนำเสนอ" },
  { id: "6", name: "Leadership Development" },
  { id: "7", name: "การใช้งานเครื่องจักรและซ่อมบำรุง" },
  { id: "8", name: "กระบวนการคิด วิเคราะห์" },
  { id: "9", name: "พัฒนาทักษะกระบวนการทำงาน" },
  { id: "10", name: "การจัดซื้อจัดจ้าง" },
  { id: "11", name: "การสื่อสาร" },
  { id: "12", name: "โครงการสัมนาอื่นๆ" },
  { id: "13", name: "พัฒนาขีดความสามารถระดับบริหาร" },
  { id: "14", name: "การเงินและการบัญชี" },
  { id: "15", name: "hi" },
];

export default function DepartmentMultipleSelect() {
  const [value, setValue] = React.useState("");
  const [selected, setSelected] = React.useState<typeof CATEGORIES>([]);

  const addCategory = (category: (typeof CATEGORIES)[number]) => {
    if (selected.find((c) => c.id === category.id)) return;
    setSelected([...selected, category]);
    setValue("");
  };

  const removeCategory = (id: string) => {
    setSelected(selected.filter((c) => c.id !== id));
  };

  return (
    <div className="w-full rounded-md border px-3 py-2">
      <div className="flex flex-wrap gap-2 items-center">
        {selected.map((category) => (
          <Badge key={category.id} variant="secondary" className="gap-1">
            {category.name}
            <button onClick={() => removeCategory(category.id)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add department"
          className="border-none shadow-none focus-visible:ring-0 w-[200px]"
        />
      </div>

      {value && (
        <Command className="mt-2 rounded-md border">
          <CommandEmpty>No results</CommandEmpty>
          <CommandGroup>
            {CATEGORIES.filter((c) =>
              c.name.toLowerCase().includes(value.toLowerCase()),
            ).map((category) => (
              <CommandItem
                key={category.id}
                onSelect={() => addCategory(category)}
              >
                {category.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      )}
    </div>
  );
}
