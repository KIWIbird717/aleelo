"use client";

import { FC, useEffect, useState } from "react";
import { Sheet } from "react-modal-sheet";
import { SheetContentHeader } from "@/widgets/ModalSheet/entities/SheetContentHeader";
import { Calendar } from "@/widgets/ModalSheet/entities/Calendar";
import { CellInfo } from "@/widgets/ModalSheet/entities/CellInfo";
import { usePrevious } from "@radix-ui/react-use-previous";
import { twMerge } from "tailwind-merge";


interface IModalSheetProps {
  svgWidth: number | null;
  svgHeight: number | null;
  padding: number;
  height: number;
}

export const ModalSheet: FC<IModalSheetProps> = (
  { svgWidth, svgHeight, padding, height },
) => {
  const [currentIndex, setCurrentIndex] = useState(95);
  const [isOpen, setOpen] = useState(false);

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
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet isOpen={isOpen}
             onClose={() => setOpen(false)}
             snapPoints={snapPoints}
             initialSnap={3}
             className={"!z-[2] !rounded-t-[20px] !shadow-none !flex absolute !justify-center"}
             onSnap={(snapIndex) => onChangeIndex(snapIndex)}
        // style={{ margin: `0 ${200}px`}}
             style={{ margin: `0 ${padding}px`, bottom: `${bottom}px` }}
      >
        <Sheet.Container className={"bg-gradient-modal-sheet !rounded-t-[20px] !shadow-none"}
                         style={{ width: `${svgWidth}px` }}
        >
          <Sheet.Header className={"flex flex-col gap-[2px] items-center pt-1.5 pb-[11px]"}>
            <div className={"w-[24px] h-[2px] bg-mint-900 opacity-50 rounded-[10px] shadow-white"} />
            <div className={"w-[24px] h-[2px] bg-mint-900 opacity-50 rounded-[10px] shadow-white"} />
          </Sheet.Header>
          <Sheet.Content className={twMerge("flex flex-col")}>
            <SheetContentHeader currentIndex={currentIndex} />
            <Calendar />
              {[...new Array(2)].map((obj, i) => {
                return <CellInfo key={i}
                                 currentIndex={currentIndex}
                                 index={i}
                />;
              })}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};