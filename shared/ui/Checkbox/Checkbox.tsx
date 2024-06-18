"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import CheckedIcon from "@/public/images/svg/checked.svg";
import CheckedDisabledIcon from "@/public/images/svg/checked-disabled.svg";
import { cn } from "../../lib/utils/cn";
import { twMerge } from "tailwind-merge";
import { forwardRef, useState } from "react";
import { useTelegram } from "../../lib/hooks/useTelegram";

/**
 * Component ref: https://ui.shadcn.com/docs/components/checkbox
 *
 * Basic usage:
 * @example
 * <Checkbox checked={false} onCheckedChange={() => {}} />
 */
const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, onCheckedChange, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState<CheckboxPrimitive.CheckedState | undefined>(checked);
  const telegram = useTelegram();

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

  const handleChecked = (checked: CheckboxPrimitive.CheckedState) => {
    setIsChecked(checked);
    telegram?.HapticFeedback.impactOccurred("light");
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(DEFAULT_CLASSES, CHECKED_CLASSES, DISABLED_CLASSES, className)}
      onCheckedChange={handleChecked}
      checked={isChecked}
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
