import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function CategorySelect() {
  return (
    <div>
      {/* Category Filter */}
      <Select>
        <SelectTrigger className="w-[180px] border-[#006022]">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">สนับสนุนนโยบายสิ่งแวดล้อม</SelectItem>
          <SelectItem value="2">ความปลอดภัยและอาชีวอนามัย</SelectItem>
          <SelectItem value="3">ความปลอดภัยและอาชีวอนามัย</SelectItem>
          <SelectItem value="4">ความปลอดภัยและอาชีวอนามัย</SelectItem>
          <SelectItem value="5">ความปลอดภัยและอาชีวอนามัย</SelectItem>
          <SelectItem value="6">ความปลอดภัยและอาชีวอนามัย</SelectItem>

          <SelectItem value="suspended">Suspended</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategorySelect;
