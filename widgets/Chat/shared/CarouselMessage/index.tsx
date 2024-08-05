import { FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/Carousel";
import { Message } from "@/widgets/Chat/shared/Message";
import { IMessageSender } from "@/shared/lib/types/game-chat-message";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";

interface ICarouselMessageProps {
  sender: IMessageSender;
  isFirstMessage: boolean;
  message: string | null;
}

const exampleMessages = [
  {
    key: "requestExample1",
    blockType: GameChatBlockEnum.requestExamplesList,
    response: GameChatBlockUserResponseEnum.submitRequest,
  }, {
    key: "requestExample2",
    blockType: GameChatBlockEnum.requestExamplesList,
    response: GameChatBlockUserResponseEnum.submitRequest,
  }, {
    key: "requestExample3",
    blockType: GameChatBlockEnum.requestExamplesList,
    response: GameChatBlockUserResponseEnum.submitRequest,
  },
];

export const CarouselMessage: FC<ICarouselMessageProps> = (
  {
    sender,
    isFirstMessage,
    message,
  },
) => {

  return (
    <div className={"w-full flex"}>
      <Carousel opts={{ align: "start" }}
                autoFocus={true}
                className="w-full max-w-sm"
      >
        <CarouselContent classNameContent={"overflow-visible"}
                         className={"px-0 mx-0 mb-[17px] gap-1.5 "}
        >
          {exampleMessages.map((value, i) => {
            return <CarouselItem key={i}
                                 className={" mt-[14px] basis-auto"}
            >
              <Message key={i}
                       messageKey={value.key}
                       sender={sender}
                       isFirstMessage={isFirstMessage}
                       className={"m-0 w-[166px] min-h-[154px]"}
                       response={value.response}
                       message={message}
                       blockType={value.blockType}
              />
            </CarouselItem>;
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};