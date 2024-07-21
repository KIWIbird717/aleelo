import { IChatMessage } from "@/shared/lib/types/chat-message";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";

export interface PostMessageOptions {
  blockType: GameChatBlockEnum;
  chatId: string;
  response: GameChatBlockUserResponseEnum | null;
  message: string | null;
}

export interface IPagination {
  limit?: number;
  offset?: number;
}

interface IPostMessageResult {
  message: IChatMessage;
  replies: IChatMessage[];
}

export interface IChat {
  id: string;
  created: Date;
}

type ChatMessages = { id: number; text: string; data: any }[];
