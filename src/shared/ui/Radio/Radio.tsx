"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/shared/lib/utils/cn";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import styles from "./styles.module.scss";

//Пример использования:

// <RadioGroup>
//   <RadioGroupContent id={"r1"} value={"default"} text={"Default"} />
//   <RadioGroupContent id={"r2"} value={"comfortable"} text={"Comfortable"} />
// </RadioGroup>

/**
 * Рефернс + подробное описание пропсов: @link https://www.radix-ui.com/primitives/docs/components/radio-group
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, onValueChange, ...props }, ref) => {
  const telegram = useTelegram();
  const handleValueChange: RadioGroupPrimitive.RadioGroupProps["onValueChange"] = (value) => {
    onValueChange && onValueChange(value);
    telegram?.HapticFeedback.impactOccurred("light");
  };

  return (
    <RadioGroupPrimitive.Root
      onValueChange={handleValueChange}
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
        "text-primary focus-visible:ring-ring aspect-square h-8 w-8 rounded-full border-[2px] border-mint-800 shadow focus:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex h-full w-full items-center justify-center">
        <div
          className={cn(
            "h-[20px] w-[20px] rounded-full bg-gradient-checkbox-active shadow-checkboxActive",
            styles.animateCubicBezier,
          )}
        />
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

const RadioGroupContent: FC<IRadioGroupContent> = ({ className, id, value, text }) => {
  return (
    <div className={twMerge(className, "flex items-center gap-[11px]")}>
      <RadioGroupItem value={value} id={id} />
      <label htmlFor={id} className={"text-[12px] font-normal leading-[17px] text-mint-900"}>
        {text}
      </label>
    </div>
  );
};

RadioGroupContent.displayName = RadioGroupContent.name;

export { RadioGroup, RadioGroupItem, RadioGroupContent };
