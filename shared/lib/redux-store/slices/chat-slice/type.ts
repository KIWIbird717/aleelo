
export interface IMessage {
  id: string
  text: string
  type: "eft" | "user"
  imageUrl?: string
  options?: string[]
  createdAt?: Date
}

export interface IChatSlice {
  messages: IMessage[]
}