
import { IMessageSender } from "@/shared/lib/types/game-chat-message";
import { IGame, IGameStep } from "@/shared/lib/types/game";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { IChat } from "@/shared/lib/types/chat";

export interface IChatMessage {
  id: string;
  user: IUser | null;
  sender: IMessageSender;
  blockType: GameChatBlockEnum;
  response: GameChatBlockUserResponseEnum | null;
  chat: IChat;
  game: IGame | null;
  step: IGameStep | null;
  key: string | null;
  message: string | null;
  created: Date;
}

export interface IUser {
  id: string;
  name: string | null;
  email: string;
  anonymous: boolean;
  created: Date;
  onboardingStatus: UserOnboardingStatusEnum;
}


export enum UserOnboardingStatusEnum {
  Passed = 'PASSED',
  NotPassed = 'NOT_PASSED',
}

