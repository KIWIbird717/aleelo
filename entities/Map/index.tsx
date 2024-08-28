"use client";

import { FC } from "react";
import { Map as MapCells } from "./shared/func/cells";
import { sortCells } from "./shared/func/sortCells";
import { ManWomanOverlay } from "./shared/ui/Overlays/ManWomanOverlay";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { ArrowsAndSnakes } from "./shared/ui/Overlays/ArrowsAndSnakes";
import { useLocale } from "next-intl";
import { Cell } from "./shared/ui/CellInfoType";

type Props = {
  // ссылка, которой можно заменить все ссылки на кнопках
  linkReplacer?: string;
  isMapActive?: boolean;
  activeCell?: number
};
export const Map: FC<Props> = (props) => {
  const {activeCell, ...rest} = props
  const logger = new Logger("Map");
  const locale = useLocale();

  return (
    <div className="relative mx-[30px] mt-[20px]">
      {/** Overlays */}
      <ArrowsAndSnakes />
      <ManWomanOverlay />

      {/** Клетки */}
      <div className="grid grid-flow-col grid-cols-5 grid-rows-8">
        {sortCells(MapCells.cells).map((cell) => (
          <Cell
            href={props.linkReplacer || `/${locale}/cell/${cell.id}`}
            key={cell.id}
            id={cell.id}
            className={cell.className}
            icon={cell.icon}
            isActive={props.isMapActive || (activeCell ? cell.id === activeCell : cell.id === 1)}
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
