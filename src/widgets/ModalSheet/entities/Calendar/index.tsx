import { FC } from "react";
import { cn } from "@/shared/lib/utils/cn";
import { twMerge } from "tailwind-merge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/Carousel";

interface ICalendarProps {
}

const dates = [
  {
    num: 5,
    month: "Май",
  },
  {
    num: 22,
    month: "Май",
  },{
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
  }, {
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
            return <CarouselItem key={i}
                                 className={twMerge("flex flex-col items-center justify-center basis-1/9 py-0.5",
                                   isToday && "w-[43px] bg-[rgba(227,241,240,0.50)] rounded-[12px] px-2",
                                 )}
            >
              <div
                className={twMerge("!text-mint-900 text-center font-semibold text-[16px] leading-6 text-shadow-light",
                  isToday && "!text-red-950",
                )}>
                {item.num}
              </div>
              <div className={twMerge("!text-mint-900 font-normal text-[13px] leading-5 text-shadow-light",
                isToday && "!text-red-950",
              )}>
                {item.month}
              </div>
            </CarouselItem>;
          })}
        </CarouselContent>
      </Carousel>

    </div>
  );
};