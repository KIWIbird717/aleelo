import { FC, useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { Messages } from "@/widgets/Chat/entities/Messages";
import { Input } from "@/shared/ui/Input";
import SendIcon from "@/public/images/svg/chat/send.svg";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IChatProps {
  svgHeight: number;
  height: number;
}

interface IMessagesData {
  type: "eft" | "user"
  messages: string[]
  options?: string[],
  imageUrL?: string
}

const messagesData: IMessagesData[] = [
  {
    type: "eft",
    messages: ["Сейчас важный момент игры", "Закрой глаза и подумай, о какой сфере жизни твои мысли?"],
    options: [
      "Слава", "Семья", "Здоровье", "Деньги", "Любовь", "Духовность", "Самореализация",
    ],
  },
  {
    type: "user",
    imageUrL: "",
    messages: ["Деньги"],
  },
];

export const Chat: FC<IChatProps> = (
  { svgHeight, height },
) => {
  const [messages, setMessages] = useState(messagesData);
  const [isFocused, setIsFocused] = useState(false);
  const [bottomInput, setBottomInput] = useState((height / 2) - svgHeight)

  useEffect(() => {
    setBottomInput((height / 2) - svgHeight)
  }, [height, svgHeight]);

  return (
    <div
      className={twMerge("relative flex flex-col justify-between px-4 pt-[11px] gap-5 overflow-y-scroll pb-[65px]",
        isFocused && "overflow-hidden"
        )}
      style={{ height: `calc(100% - ${svgHeight}px + 15px)` }}
    >
      <MotionDiv
        className={twMerge("flex flex-col gap-5", isFocused && "blur-sm")}
        animate={{ opacity: isFocused ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Messages
          type={messages[0].type}
          messages={messages[0].messages}
          photoUrl={messages[0].imageUrL}
        />

        <div
          className={"flex flex-col items-end gap-4"}
        >
          <div className={"flex flex-col items-end gap-4"}>
            {messages[0].options?.map((option, index) => {
              return (
                <Button key={index}
                        variant={"yellow"}
                        size={"small"}
                >
                  {option}
                </Button>
              );
            })}
          </div>
        </div>

        <Messages
          type={messages[1].type}
          messages={messages[1].messages}
          photoUrl={messages[1].imageUrL}
        />
      </MotionDiv>

      <MotionDiv
        className={twMerge("w-full left-0 blur-none fixed px-4")}
        style={{bottom: `${svgHeight - 17}px`}}
        animate={{ y: isFocused ? -bottomInput : 0 }}
        transition={{ duration: 0.3 }}
        initial={false}
      >
        <Input placeholder={"Нажми здесь, чтобы поговорить с Лилой"}
               classNameInput={"placeholder:text-[13px] placeholder:text-mint-900 placeholder:font-normal placeholder:leading-5 bg-mint-700 focus:placeholder:opacity-0"}
               icon={<SendIcon />}
               isChat={true}
               setFocus={() => setIsFocused(true)}
               setBlur={() => setIsFocused(false)}
        />
      </MotionDiv>
    </div>
  );
};