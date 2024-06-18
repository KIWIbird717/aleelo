import React from "react";

export const Map = () => {
  return (
    <div className="grid w-full grid-flow-col grid-cols-5 grid-rows-8 px-[30px] pt-[20px]">
      {Array.from({ length: 5 * 8 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square w-full rounded-[10px] border-[1px] border-blue-900 bg-blue-600"
        />
      ))}
    </div>
  );
};
