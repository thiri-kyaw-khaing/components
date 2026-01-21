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

const USERS = [
  { id: "1", name: "THWIN KHANT NYAR ZAW", email: "thwin@gmail.com" },
  { id: "2", name: "CHAN NYEIN THU", email: "chan@gmail.com" },
];

export default function Test() {
  const [value, setValue] = React.useState("");
  const [selected, setSelected] = React.useState<typeof USERS>([]);

  const addUser = (user: (typeof USERS)[number]) => {
    if (selected.find((u) => u.id === user.id)) return;
    setSelected([...selected, user]);
    setValue("");
  };

  const removeUser = (id: string) => {
    setSelected(selected.filter((u) => u.id !== id));
  };

  return (
    <div className="w-full rounded-md border px-3 py-2">
      <div className="flex flex-wrap gap-2 items-center">
        {selected.map((user) => (
          <Badge key={user.id} variant="secondary" className="gap-1">
            {user.name}
            <button onClick={() => removeUser(user.id)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add recipient"
          className="border-none shadow-none focus-visible:ring-0 w-[200px]"
        />
      </div>

      {value && (
        <Command className="mt-2 rounded-md border">
          <CommandEmpty>No results</CommandEmpty>
          <CommandGroup>
            {USERS.filter((u) =>
              u.name.toLowerCase().includes(value.toLowerCase()),
            ).map((user) => (
              <CommandItem key={user.id} onSelect={() => addUser(user)}>
                {user.name}
                <span className="ml-auto text-xs text-muted-foreground">
                  {user.email}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      )}
    </div>
  );
}
