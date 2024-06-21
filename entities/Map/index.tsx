"use client";

import { FC } from "react";
import { Map as MapCells } from "./shared/func/cells";
import { sortCells } from "./shared/func/sortCells";
import { Cell, CellProps } from "./shared/ui/CellInfoType";
import { ManWomanOverlay } from "./shared/ui/Overlays/ManWomanOverlay";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { ArrowsAndSnakes } from "./shared/ui/Overlays/ArrowsAndSnakes";

type Props = {
  onCellClick?: CellProps["onClick"];
};
export const Map: FC<Props> = (props) => {
  const logger = new Logger("Map");
  const handleCellClick = () => {
    logger.debug("handle click");
  };
  return (
    <div className="relative mx-[30px] mt-[20px]">
      {/** Overlays */}
      <ArrowsAndSnakes />
      <ManWomanOverlay />

      {/** Клетки */}
      <div className="grid grid-flow-col grid-cols-5 grid-rows-8">
        {sortCells(MapCells.cells).map((cell) => (
          <Cell
            key={cell.id}
            id={cell.id}
            className={cell.className}
            icon={cell.icon}
            onClick={handleCellClick}
            isActive={cell.id === 1}
          />
        ))}
      </div>

      {/** Подложка */}
      <div className="absolute left-0 top-0 z-[-1] mx-[30px] my-[20px] flex h-[95%] w-[calc(100%-60px)] items-center justify-center py-[8%]">
        <div className="mx-[10%] h-full w-full rounded-[30px] bg-gradient-to-b from-[#1C373D] to-[#285761] py-[100px] blur-[10px]" />
      </div>
    </div>
  );
};
