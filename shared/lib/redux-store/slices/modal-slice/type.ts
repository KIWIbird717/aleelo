import { ReactNode } from "react";

export type ModelType = "elements" | "moodStatus";

type typeIcon = "man" | "earth" | "level2" | "happy";

export interface IElement {
  id: number;
  title: string;
  heading: string;
  icon: ReactNode;
  description: string;
  typeIcon: typeIcon;
}

export interface IModalData {
  element?: IElement;
  text?: string
}

export interface IModelSlice {
  type: ModelType | null;
  isOpen: boolean;
  data?: IModalData;
}
