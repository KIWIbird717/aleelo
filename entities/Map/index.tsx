"use client";

import React, { CSSProperties, FC, JSXElementConstructor, ReactNode, SVGProps } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Logger } from "../../shared/lib/utils/logger/Logger";
import { cn } from "@/shared/lib/utils/cn";
import { Map as MapCells } from "./shared/cells";
import lodash from "lodash";
import dynamic from "next/dynamic";
import { useAnimate } from "framer-motion";
import { ButtonNS } from "@/shared/ui/Button/Button";
import { useRouter } from "next/navigation";

/**
 * трансформируем массив таким образом, чтобы
 * он правильно отображался в grid 5x8
 *
 * По-сути делаем так (упрощено до сетки 3x4):
 * шаг № 1 (инвертируем нечетные строки)
 * [1 2 3 4 5 6 7 8 9 10 11 12]
 *
 * [[1 2 3] [4 5 6] [7 8 9] [10 11 12]]
 *
 * [[1 2 3] [6 5 4] [7 8 9] [12 11 10]]
 *
 * [1 2 3 6 5 4 7 8 9 12 11 10]
 *
 * шаг № 2 (тут магия, я хз если честно)
 * [3 4 9 10 2 5 8 11 1 6 7 12]
 *
 * шаг № 3 (reverse)
 * [12 7 6 1 11 8 5 2 10 9 4 3]
 */
const sortCells = (cells: typeof MapCells.cells) => {
  const cols = 8;
  const rows = 5;

  const idOdd = (num: number) => num % 2 === 0;

  // шаг № 1
  const cellsToSort = lodash
    .chunk(cells, rows)
    .map((row, index) => {
      if (!idOdd(index)) {
        return row.reverse();
      }
      return row;
    })
    .flat();

  const sortedCells = [];

  // шаг № 2
  for (let row = rows - 1; row >= 0; row--) {
    for (let col = 0; col < cols; col++) {
      sortedCells.push(cellsToSort[row + col * rows]);
    }
  }

  // шаг № 3
  return sortedCells.reverse();
};

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

type CellInfoType = {
  title: string;
} & Omit<MapCells.CellType, "icon" | "className">;
type CellProps = {
  id: number;
  className: string;
  style?: CSSProperties;
  icon: JSXElementConstructor<Partial<SVGElement>>;
  onClick?: (cell: CellInfoType, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
const Cell: FC<CellProps> = (props) => {
  const logger = new Logger(Cell.name);
  const [scope, animate] = useAnimate();
  const t = useTranslations();
  const title = t(`cells_${props.id}_title`);

  const locale = useLocale()
  const {push} = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    animate([
      [scope.current, { scale: 0.8 }, { duration: ButtonNS.halfAnimDuration }],
      [scope.current, { scale: 1 }, { duration: ButtonNS.halfAnimDuration }],
    ]);

    const cellInfo: CellInfoType = {
      title,
      id: props.id,
    };
    props.onClick && props.onClick(cellInfo, event);

    push(`/${locale}/practice/${props.id}`)
  };

  return (
    <button
      ref={scope}
      style={props.style}
      onClick={handleClick}
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[10px] border-[1px] border-[#295962] pb-[8px]",
        props.className,
      )}
    >
      <props.icon />

      <h6
        className="absolute right-[4px] top-[4px] w-full text-end text-[12px] font-medium leading-[12px]"
        style={{ textShadow: "0px 2px 3px rgba(255, 255, 255, 0.3)" }}
      >
        {props.id}
      </h6>
      <h6
        className="absolute bottom-[4px] w-full break-words px-[3.1px] text-center text-[9px] leading-[10px]"
        style={{ textShadow: "0px 2px 3px rgba(255, 255, 255, 0.3)" }}
      >
        {title}
      </h6>
    </button>
  );
};
