import { FC, KeyboardEvent, useEffect, useState } from "react";
import { Messages } from "@/widgets/Chat/entities/Messages";
import { Input } from "@/shared/ui/Input";
import SendIcon from "@/public/images/svg/chat/send.svg";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";
import useRequest from "@/shared/lib/hooks/useRequest";
import { IMessage } from "@/shared/lib/redux-store/slices/chat-slice/type";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";
import { ChatSlice } from "@/shared/lib/redux-store/slices/chat-slice/userSlice";
import { AnimatePresence } from "framer-motion";
import { useCurrentGame } from "@/shared/lib/hooks/useCurrentGame";
import { GameService } from "@/shared/lib/services/game";
import { serverApi } from "@/shared/lib/axios";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

interface IChatProps {
  svgHeight: number;
  height: number;
}

interface IMessagesData {
  type: "eft" | "user";
  messages: string[];
  options?: string[];
  imageUrL?: string;
}

export const Chat: FC<IChatProps> = ({ svgHeight, height }) => {
  const [input, setInput] = useState("");
  const { messages } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [bottomInput, setBottomInput] = useState(height / 2 - svgHeight);

  const currentGame = useCurrentGame();

  const onBlur = () => setIsFocused(false);
  const onFocus = () => setIsFocused(true);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage: IMessage = {
      id: new Date().toISOString(),
      text: input,
      createdAt: new Date(),
      type: "user",
      imageUrl: "",
    };

    dispatch(ChatSlice.addMessage(newMessage));
    setInput("");
    onBlur();
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      await sendMessage();
      onBlur();
    }
  };

  useEffect(() => {
    setBottomInput(height / 2 - svgHeight);
  }, [height, svgHeight]);

  useRequest(async () => {
    const practiceRes = await GameService.getPractices({
      limit: 50,
      offset: 0,
      gameId: currentGame.get()?.id,
    });

    await serverApi.get(`game-chat/practices/${practiceRes.data.id}/send-message`);
  }, []);

  return (
    <div
      className={twMerge(
        "relative flex flex-col justify-between gap-5 overflow-y-scroll px-4 pb-[65px] pt-[11px]",
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
            const showAvatar = index === 0 || messages[index].type !== messages[index - 1].type;
            const isCurrentType = message.type === messages[index + 1]?.type;

            return (
              <Messages
                key={message.id}
                type={message.type}
                message={message.text}
                photoUrl={message.imageUrl}
                isFirstMessage={showAvatar}
                isCurrentType={isCurrentType}
              />
            );
          })}
        </AnimatePresence>
      </MotionDiv>

      <MotionDiv
        className={twMerge("fixed left-0 w-full px-4 blur-none")}
        style={{ bottom: `${svgHeight - 17}px` }}
        animate={{ y: isFocused ? -bottomInput : 0 }}
        transition={{ duration: 0.3 }}
        initial={false}
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
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </MotionDiv>
    </div>
  );
};
