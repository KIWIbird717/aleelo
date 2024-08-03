import { FC } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { IOptions } from "@/app/[locale]/onboarding/practice/page";
import dynamic from "next/dynamic";
import { useOption } from "@/shared/lib/hooks/useOption";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));


interface IOptionProps {
  options: IOptions[];
}

export const Option: FC<IOptionProps> = (
  {
    options,
  },
) => {

  const {onChangeChoose} = useOption()
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className={"flex flex-col items-end gap-4"}
    >
      <div className={"flex flex-col items-end gap-4"}>
        {options?.map((option, index) => {
          return (
            <Button key={index}
                    variant={"yellow"}
                    size={"small"}
                    onClick={() => {
                      onChangeChoose(option.message, option.key)
                    }}
            >
              {option.message}
            </Button>
          );
        })}
      </div>
    </MotionDiv>
  );
};