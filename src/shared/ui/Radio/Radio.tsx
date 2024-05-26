"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/shared/func/utils";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-8 w-8 rounded-full border-[2px] border-mint-800 text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex w-full h-full items-center justify-center">
        <div className={"w-[20px] h-[20px] bg-gradient-checkbox-active rounded-full shadow-checkboxActive"} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface IRadioGroupContent {
  className?: string;
  value: string;
  id: string;
  text: string;
}

const RadioGroupContent: FC<IRadioGroupContent> = (
  {
    className,
    id,
    value,
    text,
  },
) => {
  return (
    <div className={twMerge(className, "flex items-center gap-[11px]")}>
      <RadioGroupItem value={value} id={id} />
      <label htmlFor={id}
             className={"text-mint-900 font-normal text-[12px] leading-[17px]"}
      >
        {text}
      </label>
    </div>
  );
};

RadioGroupContent.displayName = RadioGroupContent.name;

export { RadioGroup, RadioGroupItem, RadioGroupContent };
