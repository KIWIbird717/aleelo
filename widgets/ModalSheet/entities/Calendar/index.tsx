import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Carousel, CarouselContent, CarouselItem } from "../../../../shared/ui/Carousel";

interface ICalendarProps {}

const dates = [
  {
    num: 5,
    month: "Май",
  },
  {
    num: 22,
    month: "Май",
  },
  {
    num: 23,
    month: "Май",
  },
  {
    num: 26,
    month: "Май",
  },
  {
    num: 1,
    month: "Июн",
  },
  {
    num: 5,
    month: "Июн",
  },
  {
    num: 11,
    month: "Июн",
  },
  {
    num: 18,
    month: "Июн",
  },
  {
    num: 20,
    month: "Июн",
  },
  {
    num: 11,
    month: "Июн",
  },
  {
    num: 18,
    month: "Июн",
  },
  {
    num: 20,
    month: "Июн",
  },
];

export const Calendar: FC<ICalendarProps> = () => {
  return (
    <div className={"flex gap-6 pt-[13px]"}>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {dates.map((item, i) => {
            const isToday = i === 3; // на время
            return (
              <CarouselItem
                key={i}
                className={twMerge(
                  "basis-1/9 flex flex-col items-center justify-center py-0.5",
                  isToday && "w-[43px] rounded-[12px] bg-[rgba(227,241,240,0.50)] px-2",
                )}
              >
                <div
                  className={twMerge(
                    "text-center text-[16px] font-semibold leading-6 !text-mint-900 text-shadow-light",
                    isToday && "!text-red-950",
                  )}
                >
                  {item.num}
                </div>
                <div
                  className={twMerge(
                    "text-[13px] font-normal leading-5 !text-mint-900 text-shadow-light",
                    isToday && "!text-red-950",
                  )}
                >
                  {item.month}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
