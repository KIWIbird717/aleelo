"use client";

import { CSSProperties, FC, JSXElementConstructor } from "react";
import { Map as MapCells } from "./shared/func/cells";
import { sortCells } from "./shared/func/sortCells";

import { ManWomanOverlay } from "./shared/ui/Overlays/ManWomanOverlay";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { ArrowsAndSnakes } from "./shared/ui/Overlays/ArrowsAndSnakes";
import { useLocale, useTranslations } from "next-intl";
import { useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { ButtonNS } from "@/shared/ui/Button/Button";
import { cn } from "@/shared/lib/utils/cn";

type Props = {
  onCellClick?: CellProps["onClick"];
};
export const Map: FC<Props> = (props) => {
  const logger = new Logger("Map");
  const locale = useLocale();

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
            href={`/${locale}/cell/${cell.id}`}
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

type CellInfoType = {
  title: string;
} & Omit<MapCells.CellType, "icon" | "className">;
type CellProps = {
  id: number;
  className: string;
  href: string
  style?: CSSProperties;
  isActive?: boolean
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

    push(props.href)
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
