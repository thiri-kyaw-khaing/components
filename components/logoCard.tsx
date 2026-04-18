import React from "react";
import Image from "next/image";

function LogoCard() {
  return (
    <div className="rounded-lg bg-[#006022] p-0">
      <div className="relative mx-auto h-12 w-full max-w-[180px]">
        <Image
          src="/logo.png"
          alt="Company logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default LogoCard;
