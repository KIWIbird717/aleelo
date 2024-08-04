import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/Carousel";
import { Message } from "@/widgets/Chat/shared/Message";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";

interface ICarouselMessageProps {
  sender: IMessageSender
  isFirstMessage: boolean;
  response: GameChatBlockUserResponseEnum | null
  message: string | null;
  blockType: GameChatBlockEnum
}

export const CarouselMessage: FC<ICarouselMessageProps> = (
  {
    sender,
    isFirstMessage,
    response,
    message,
    blockType
  }
) => {

  const exampleMessages = [
    "requestExample1",
    "requestExample2",
    "requestExample3",
  ];

  return (
    <div className={"w-full flex"}>

      <Carousel opts={{ align: "start" }}
                autoFocus={true}
                className="w-full max-w-sm"
      >
        <CarouselContent classNameContent={"overflow-visible"}
                         className={"px-0 mx-0 mb-[17px] gap-1.5 "}
        >
          {[...new Array(3)].map((_, i) => {
            return <CarouselItem key={i}
                                 className={" mt-[14px] basis-auto"}
            >
              <Message key={i}
                       messageKey={exampleMessages[i]}
                       sender={sender}
                       isFirstMessage={isFirstMessage}
                       className={"m-0 w-[166px] min-h-[154px]"}
                       response={response}
                       message={message}
                       blockType={blockType}
              />
            </CarouselItem>;
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};