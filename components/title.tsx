import React from "react";

function Title({ text }: { text: string }) {
  return <h1 className="text-lg font-bold">{text}</h1>;
}

export default Title;
