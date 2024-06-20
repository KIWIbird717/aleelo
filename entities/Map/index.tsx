"use client";

import { Map as MapCells } from "./shared/func/cells";
import { sortCells } from "./shared/func/sortCells";
import { Cell } from "./shared/ui/CellInfoType";

export const Map = () => {
  return (
    <div className="relative px-[30px] pt-[20px]">
      <div className="grid grid-flow-col grid-cols-5 grid-rows-8">
        {sortCells(MapCells.cells).map((cell) => (
          <Cell key={cell.id} id={cell.id} className={cell.className} icon={cell.icon} />
        ))}
      </div>
      <div className="absolute left-0 top-0 z-[-1] mx-[30px] my-[20px] flex h-[95%] w-[calc(100%-60px)] items-center justify-center py-[8%]">
        <div className="mx-[10%] h-full w-full rounded-[30px] bg-gradient-to-b from-[#1C373D] to-[#285761] py-[100px]" />
      </div>
    </div>
  );
};
