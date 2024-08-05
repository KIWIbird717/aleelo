import { FC, useEffect, useState } from "react";
import { Messages } from "@/widgets/Chat/entities/Messages";
import { Input } from "@/shared/ui/Input";
import SendIcon from "@/public/images/svg/chat/send.svg";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import { IUseMessage } from "@/shared/lib/hooks/useMessage";
import { Options } from "@/widgets/Chat/entities/Options";
import { useOption } from "@/shared/lib/hooks/useOption";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IChatProps {
  svgHeight: number;
  height: number;
  messageObj: IUseMessage;
}

export const Chat: FC<IChatProps> = (
  {
    svgHeight,
    height,
    messageObj,
  },
) => {
  const [bottomInput, setBottomInput] = useState(height / 2 - svgHeight);
  const {
    isFocused,
    messages,
    input,
    sendMessage,
    handleKeyDown,
    onFocus,
    onBlur,
    onChangeValue,
    blockTypeLastMessage,
  } = messageObj;

  const {optionState} = useOption()

  useEffect(() => {
    setBottomInput(height / 2 - svgHeight);
  }, [height, svgHeight]);


  return (
    <div
      className={twMerge(
        "relative flex flex-col justify-between gap-5 overflow-x-hidden overflow-y-scroll px-4 pb-[65px] pt-[11px]",
        isFocused && "overflow-hidden",
      )}
      style={{ height: `calc(100% - ${svgHeight}px + 15px)` }}
    >
      <MotionDiv
        className={twMerge("flex flex-col gap-[5px]", isFocused && "blur-sm")}
        animate={{ opacity: isFocused ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
      >

        <AnimatePresence initial={false}>
          {messages.map((message, index) => {
            const showAvatar = index === 0 || messages[index].sender !== messages[index - 1].sender;
            const isCurrentType = message.sender === messages[index + 1]?.sender;

            return (
              <Messages key={message.id}
                        message={message}
                        isFirstMessage={showAvatar}
                        isCurrentType={isCurrentType}
              />
            );
          })}

          <Options messages={messages}
          />

        </AnimatePresence>

      </MotionDiv>
      <AnimatePresence initial={false}>
      {!!messages
        && (blockTypeLastMessage === "awesomeThenClickAndSetRequest"
        || (blockTypeLastMessage === "requestExamplesList" && optionState.isShowInput))
        && <MotionDiv
          className={twMerge("fixed left-0 w-full px-4 blur-none")}
          style={{ bottom: `${svgHeight - 17}px` }}
          animate={{ y: isFocused ? -bottomInput : 0 }}
          transition={{ duration: 0.3 }}
          // initial={false}
        >
          <Input
            placeholder={"Нажми здесь, чтобы поговорить с Лилой"}
            classNameInput={
              "placeholder:text-[13px] placeholder:text-mint-900 placeholder:font-normal placeholder:leading-5 bg-mint-700 focus:placeholder:opacity-0"
            }
            value={input}
            icon={<SendIcon />}
            onClickButton={sendMessage}
            isChat={true}
            onKeyDown={handleKeyDown}
            setFocus={onFocus}
            setBlur={onBlur}
            onChange={(e) => onChangeValue(e.currentTarget.value)}
          />
        </MotionDiv>}
      </AnimatePresence>
    </div>
  );
};
