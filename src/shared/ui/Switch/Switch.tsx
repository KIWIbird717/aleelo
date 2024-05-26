"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/shared/func/utils";
import { twMerge } from "tailwind-merge";


const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>((
  {
    className,
    ...props
  }
  , ref,
) => {
  const DEFAULT_CLASSES = "peer inline-flex items-center h-[36px] w-[64px] border-none shrink-0 rounded-full border-2 border-transparent transition-colors";

  const DEFAULT_CLASSES_ROOT =
    twMerge(!props.disabled && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background")
  const UNCHECKED_CLASSES_ROOT =
    twMerge(!props.disabled && "data-[state=unchecked]:shadow-switchUnchecked data-[state=unchecked]:bg-gradient-switch-unchecked")
  const CHECKED_CLASSES_ROOT =
    twMerge(!props.disabled && "data-[state=checked]:bg-button-gradient-orange-reverse")
  const DISABLED_CLASSES_ROOT = "disabled:bg-mint-800  disabled:cursor-not-allowed";

  const DEFAULT_CLASSES_THUMB = "pointer-events-none flex justify-center  items-center h-[36px] w-[36px]  rounded-full ring-0 transition-transform bg-mint-800 data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-7"
  const UNCHECKED_CLASSES_THUMB =
    twMerge(!props.disabled && "data-[state=unchecked]:bg-grey-900 [&>div]:data-[state=unchecked]:shadow-switchUncheckedCircle [&>div]:bg-white")
  const CHECKED_CLASSES_THUMB =
    twMerge(!props.disabled && " data-[state=checked]:bg-button-gradient-orange [&>div]:data-[state=checked]:shadow-switch [&>div]:bg-white")
  const DISABLED_CLASSES_THUMB = twMerge(props.disabled && "[&>div]:bg-mint-700")

  const DEFAULT_CLASSES_THUMB_INNER = "w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full";

  return (
    <SwitchPrimitives.Root
      className={cn(
        DEFAULT_CLASSES,
        DISABLED_CLASSES_ROOT,
        DEFAULT_CLASSES_ROOT,
        UNCHECKED_CLASSES_ROOT,
        CHECKED_CLASSES_ROOT,
        className,
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          DEFAULT_CLASSES_THUMB,
          UNCHECKED_CLASSES_THUMB,
          CHECKED_CLASSES_THUMB,
          DISABLED_CLASSES_THUMB
        )}
      >
        <div className={twMerge(DEFAULT_CLASSES_THUMB_INNER, "")} />
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
