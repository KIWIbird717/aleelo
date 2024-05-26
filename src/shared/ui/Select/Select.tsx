"use client";

import { type ComponentProps, forwardRef, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import ArrowDownIcon from "@/app/images/svg/arrow-down.svg";
import ArrowUpIcon from "@/app/images/svg/arrow-up.svg";

export interface ISelectOptions {
  value: string;
  title: string;
}

interface InputProps extends ComponentProps<"select"> {
  options: ISelectOptions[];
}

export const Select = forwardRef<HTMLSelectElement, InputProps>(
  (
    {
      options,
      ...props
    }, ref,
  ) => {
    const [selected, setSelected] = useState<ISelectOptions>(options[0]);
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleBlur);
      return () => {
        document.removeEventListener("mousedown", handleBlur);
      };
    }, []);

    const handleOptionClick = (option: ISelectOptions) => {
      setSelected(option);
      setIsFocused(false);
    };

    const DEFAULT_CLASSES = "bg-gradient-borders rounded-[28px] h-[50px] flex items-center justify-center gap-4 drop-shadow-input shadow-input w-full leading-none";
    const IS_FOCUS = twMerge(isFocused && "bg-gradient-border-active shadow-inputActive");

    const DEFAULT_CLASSES_SELECTED = "flex items-center justify-between gap-4 outline-none bg-white shadow-input rounded-[28px] pl-[25px] pr-5 text-[13px] leading-[19.5px] font-normal text-grey h-[46px] placeholder:color-placeholder w-[calc(100%-4px)]";

    const DEFAULT_CLASSES_WRAPPER = "flex flex-col pl-[6px] py-3 !h-[183px] bg-white rounded-[25px] !bg-scroll-red mt-2 shadow-options"

    const DEFAULT_CLASSES_SELECT = "flex items-center h-[46px] px-[14px] py-[10px] w-full text-left rounded-[10px] hover:bg-red text-[13px] leading-[19.5px] font-normal text-green-990 hover:bg-button-selected hover:text-white";

    return (
      <div className="flex flex-col gap-[6px] w-full"
           ref={selectRef}
      >
        <div className={twMerge(DEFAULT_CLASSES, IS_FOCUS)}
             onClick={handleFocus}
        >
          <button className={DEFAULT_CLASSES_SELECTED}>
            <span>{selected.title}</span>
            {isFocused
              ? <ArrowDownIcon />
              : <ArrowUpIcon />
            }
          </button>
        </div>

        {isFocused && (
          <div
            className={DEFAULT_CLASSES_WRAPPER}>
            <div className="overflow-y-scroll">
              {options.map((option) => (
                <button
                  key={option.value}
                  style={{ height: "40px" }}
                  className={twMerge(DEFAULT_CLASSES_SELECT, selected.value === option.value && "bg-button-selected text-white")}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = Select.name;