"use client";

import { FC, useEffect, useState } from "react";
import { Sheet } from "react-modal-sheet";
import { twMerge } from "tailwind-merge";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";
import { SheetContentHeader } from "@/widgets/ModalSheetProfile/entities/SheetContentHeader";
import { ElementInfo } from "@/widgets/ModalSheetProfile/shared/ui/ElementInfo";
import { Icons } from "@/entities/Icons";
import { ElementBlock } from "@/widgets/ModalSheetProfile/entities/ElementBlock";
import { IElement } from "@/shared/lib/redux-store/slices/modal-slice/type";
import { Icon } from "@/shared/ui/Icon";

interface IModalSheetProfileProps {
  svgWidth: number | null;
  svgHeight: number | null;
  padding: number;
  height: number;
}

export const items: IElement[] = [
  {
    id: 0,
    title: "15%",
    icon: <Icon variant={"fear"} color={"yellow"} />,
  },
  {
    id: 1,
    title: "20%",
    icon: <Icon variant={"angry"} color={"yellow"} />,
  },
  {
    id: 2,
    title: "59%",
    icon: <Icon variant={"happy"} color={"yellow"} />,
  },
  {
    id: 3,
    title: "6%",
    icon: <Icon variant={"sad"} color={"yellow"} />
  },
];

export const ModalSheetProfile: FC<IModalSheetProfileProps> = ({ svgWidth, svgHeight, padding, height }) => {
  const setIsTurnOn = usePreventOnSwipeWindowClose(true);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isOpen, setOpen] = useState(true);

  const onChangeIndex = (index: number) => setCurrentIndex(index);
  const [snapPoints, setSnapPoints] = useState<number[]>([695, 125]);
  const [bottom, setBottom] = useState(svgHeight! - 100);

  useEffect(() => {
    if (svgHeight! <= 125) {
      setIsTurnOn(true);
    } else {
      setIsTurnOn(false);
    }
  }, [setIsTurnOn, svgHeight]);

  useEffect(() => {
    if (height < 780) {
      setSnapPoints([height - 100, 125]);
    } else {
      setSnapPoints([695, 125]);
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
        onClose={() => setCurrentIndex(1)}
        snapPoints={snapPoints}
        initialSnap={currentIndex}
        onSnap={(snapIndex) => onChangeIndex(snapIndex)}
        className={"absolute !z-[30] !flex !justify-center !rounded-t-[20px] !shadow-none"}
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

          <Sheet.Content disableDrag={true} className={twMerge("flex flex-col gap-[11px] ")}>
            <SheetContentHeader />

            <div
              className={twMerge(
                "h-full w-full overflow-hidden",
                // height <= 780 && "overflow-y-scroll pb-16",
              )}
            >
              <div className={"flex h-full flex-col overflow-scroll gap-[11px] pb-16 px-4"}>
                <ElementBlock title={"Энергии"}>
                  <ElementInfo info={"54%"} icon={<Icon variant={"man"} color={"deepBlue"} />} />
                  <ElementInfo info={"46%"} icon={<Icon variant={"woman"} color={"red"} />} />
                </ElementBlock>

                <ElementBlock title={"Cтихии"}>
                  <ElementInfo info={"54%"} icon={<Icon variant={"air"} color={"grey"} />} />
                  <ElementInfo info={"46%"} icon={<Icon variant={"earth"} color={"turquoise"} />}/>
                  <ElementInfo info={"54%"} icon={<Icon variant={"water"} color={"blue"} />}/>
                  <ElementInfo info={"46%"} icon={<Icon variant={"fire"} color={"orange"} />}/>
                </ElementBlock>

                <ElementBlock title={"Эмоции"}
                              className={"px-1.5"}
                >
                  <Icons className={"mb-4 mt-[9px] gap-[9px]"} items={items} variant={"second"} />
                </ElementBlock>

                <ElementBlock title={"Эмоции"}
                              isLast
                >
                  <ElementInfo info={"мин"} icon={<Icon variant={"level2"} color={"turquoise"} />}/>
                  <ElementInfo info={"макс"} icon={<Icon variant={"level4"} color={"turquoise"} />}/>
                </ElementBlock>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};