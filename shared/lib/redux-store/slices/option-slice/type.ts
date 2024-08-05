import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";

export interface IOptionSlice {
  isShowOption: boolean;
  isShowInput: boolean;
  message: string | null;
  key: GameChatBlockUserResponseEnum | null
  blockType:  GameChatBlockEnum | null
}
