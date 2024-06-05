"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import CheckedIcon from "@/app/images/svg/checked.svg";
import CheckedDisabledIcon from "@/app/images/svg/checked-disabled.svg";

import { cn } from "@/shared/lib/utils/cn";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

// https://ui.shadcn.com/docs/components/checkbox

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const DEFAULT_CLASSES = twMerge(
    "peer w-[32px] h-[32px] shrink-0 rounded-[8px] bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border-[2px] border-[#C9E2E7] transition-all duration-150",
  );
  const CHECKED_CLASSES = twMerge(
    !props.disabled &&
      "data-[state=checked]:bg-gradient-checkbox-active data-[state=checked]:shadow-checkboxActive data-[state=checked]:border-none",
  );
  const DISABLED_CLASSES = twMerge(
    "disabled:cursor-not-allowed disabled:bg-mint-800 disabled:border-none",
  );

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(DEFAULT_CLASSES, CHECKED_CLASSES, DISABLED_CLASSES, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn("text-current flex items-center justify-center")}>
        {props.disabled ? <CheckedDisabledIcon /> : <CheckedIcon />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
