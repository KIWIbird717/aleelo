import React from "react";
import { useTranslations } from "next-intl";
import { Logger } from "../../shared/lib/utils/logger/Logger";

/* Rectangle 1231 */

// position: absolute;
// width: 68px;
// height: 68px;

// background: #E9E9BD;
// box-shadow: inset -4px -4px 6px #9A9A75, inset 2px 2px 4px #FAFADE;
// border-radius: 10px;

// const cells = [
//   {
//     id: 1,
//     name:
//   }
// ]

export const Map = () => {
  return (
    <div className="grid w-full grid-flow-col grid-cols-5 grid-rows-8 px-[30px] pt-[20px]">
      <Cells />
      {Array.from({ length: 5 * 8 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square w-full rounded-[10px] border-[1px] border-blue-900 bg-blue-600"
        />
      ))}
    </div>
  );
};

const Cells = () => {
  const logger = new Logger(Cells.name);
  const t = useTranslations();
  logger.debug({ t });
  return null;
};
