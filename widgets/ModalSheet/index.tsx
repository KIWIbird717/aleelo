"use client";

import { FC, useEffect, useState } from "react";
import { Sheet } from "react-modal-sheet";
import { SheetContentHeader } from "./entities/SheetContentHeader";
import { Calendar } from "./entities/Calendar";
import { CellInfo } from "./entities/CellInfo";
import { twMerge } from "tailwind-merge";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";

interface IModalSheetProps {
  svgWidth: number | null;
  svgHeight: number | null;
  padding: number;
  height: number;
}

export const ModalSheet: FC<IModalSheetProps> = ({ svgWidth, svgHeight, padding, height }) => {
  usePreventOnSwipeWindowClose(true);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isOpen, setOpen] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await serverApi.get("/game/list?limit=49&offset=1");
  //     console.log({ data });
  //   })();
  // }, []);

  const onChangeIndex = (index: number) => setCurrentIndex(index);
  const [snapPoints, setSnapPoints] = useState<number[]>([695, 475, 200, 125]);
  const [bottom, setBottom] = useState(svgHeight! - 100);

  useEffect(() => {
    if (height < 780) {
      setSnapPoints([height - 100, height - 255, 200, 125]);
    } else {
      setSnapPoints([695, 475, 200, 125]);
    }
  }, [height, svgHeight]);

  useEffect(() => {
    if (svgHeight !== null) {
      if (height < 800) {
        setBottom(svgHeight - 100);
      } else {
        setBottom(svgHeight - 100);
      }
    }
  }, [height, svgHeight]);

  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => setCurrentIndex(3)}
        snapPoints={snapPoints}
        initialSnap={currentIndex}
        onSnap={(snapIndex) => onChangeIndex(snapIndex)}
        className={"absolute !z-[998] !flex !justify-center !rounded-t-[20px] !shadow-none"}
        style={{ margin: `0 ${padding}px`, bottom: `${bottom}px` }}
      >
        <Sheet.Container
          className={"!rounded-t-[20px] bg-gradient-modal-sheet !shadow-none"}
          style={{ width: `${svgWidth}px` }}
        >
          <Sheet.Header className={"flex flex-col items-center gap-[2px] pb-[11px] pt-1.5"}>
            <div
              className={"h-[2px] w-[24px] rounded-[10px] bg-mint-900 opacity-50 shadow-white"}
            />
            <div
              className={"h-[2px] w-[24px] rounded-[10px] bg-mint-900 opacity-50 shadow-white"}
            />
          </Sheet.Header>

          <Sheet.Content disableDrag={true} className={twMerge("flex flex-col")}>
            <SheetContentHeader currentIndex={currentIndex} />
            <Calendar />
            {[...new Array(2)].map((obj, i) => {
              return <CellInfo key={i} currentIndex={currentIndex} index={i} />;
            })}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};
