"use client";

import CheckedIcon from "@/public/images/svg/checked.svg";
import CheckedDisabledIcon from "@/public/images/svg/checked-disabled.svg";
import { cn } from "../../lib/utils/cn";
import { twMerge } from "tailwind-merge";
import { forwardRef, useState } from "react";
import { useTelegram } from "../../lib/hooks/useTelegram";
import { CheckboxProps, Indicator, Root } from "@radix-ui/react-checkbox";

const DEFAULT_CLASSES = twMerge(
  "peer w-[32px] h-[32px] shrink-0 rounded-[8px] bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border-[2px] border-[#C9E2E7] transition-all duration-150",
);
const DISABLED_CLASSES = twMerge(
  "disabled:cursor-not-allowed disabled:bg-mint-800 disabled:border-none",
);

/**
 * Component ref: https://ui.shadcn.com/docs/components/checkbox
 *
 * Basic usage:
 * @example
 * <Checkbox checked={false} onCheckedChange={() => {}} />
 */
const Checkbox2 = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, onCheckedChange, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState<CheckboxProps["checked"] | undefined>(checked);
  const telegram = useTelegram();

  const CHECKED_CLASSES = twMerge(
    !props.disabled &&
      "data-[state=checked]:bg-gradient-checkbox-active data-[state=checked]:shadow-checkboxActive data-[state=checked]:border-none",
  );

  const handleChecked = (checked: CheckboxProps["checked"]) => {
    setIsChecked(checked);
    telegram?.HapticFeedback.impactOccurred("light");
  };

  return (
    <Root
      ref={ref}
      className={cn(DEFAULT_CLASSES, CHECKED_CLASSES, DISABLED_CLASSES, className)}
      onCheckedChange={handleChecked}
      checked={isChecked}
      {...props}
    >
      <Indicator className={cn("text-current flex items-center justify-center")}>
        {props.disabled ? <CheckedDisabledIcon /> : <CheckedIcon />}
      </Indicator>
    </Root>
  );
});

Checkbox2.displayName = Checkbox2.name;

export { Checkbox2 };
