import React from "react";
import { Button } from "./ui/button";

function CustomizeButton({
  icon,
  text,
}: {
  icon?: React.ReactNode;
  text?: string;
}) {
  return (
    <div>
      <div className="mt-6">
        <Button className="bg-[#006022] text-white px-4 py-2 rounded-lg hover:bg-[#005018]">
          {icon} {text}
        </Button>
      </div>
    </div>
  );
}

export default CustomizeButton;
