import { IUser } from "@/shared/lib/types/chat-message";
import { IChat } from "@/shared/lib/types/chat";

export interface IPractice {
  id: string;
  user: IUser;
  chat: IChat;
  status: PracticeStatusEnum;
  cell: number;
  created: Date;
}

export enum PracticeStatusEnum {
  done = "done",
  notDone = "notDone",
}
