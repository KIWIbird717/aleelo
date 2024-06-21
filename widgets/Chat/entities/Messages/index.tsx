import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Avatar } from "@/widgets/Chat/shared/Avatar";
import { Message } from "@/widgets/Chat/shared/Message";

interface IMessagesProps {
  type: "user" | "eft";
  photoUrl?: string;
  messages: string[];
}

export const Messages: FC<IMessagesProps> = (
  {
    type, photoUrl, messages,
  }) => {
  return (
    <div className={twMerge("w-full flex gap-[11px]",
        type === "user" && "justify-end",
      )}
    >
      <Avatar type={type}
              photoUrl={photoUrl}
      />

      <div className={"flex flex-col gap-[5px]"}>
        {messages.map((obj, index) => {
          return <Message key={index}
                          index={index}
                          message={obj}
                          type={type}
          />;
        })}
      </div>
    </div>
  );
};