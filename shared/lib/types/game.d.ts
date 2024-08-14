import { IChat } from "@/shared/lib/types/chat";
import { IUser } from "@/shared/lib/types/chat-message";
import { GameServiceTypes } from "@/shared/lib/services/game/types";

import { IGameFinalReport } from "@/shared/lib/types/game-final-report";
import { GameFieldCellEmotionEnum, PrecreatedTalismanEnum } from "@/shared/lib/types/game-talisman";
import GameSphereEnum = GameServiceTypes.GameSphereEnum;
import GameStatusEnum = GameServiceTypes.GameStatusEnum;

export interface IGame {
  id: string;
  user: IUser | null;
  request: string | null;
  chat: IChat | null;
  status: GameStatusEnum;
  sphere: GameSphereEnum | null;
  talisman: IGameTalisman | null;
  finalReport: IGameFinalReport | null;
  statistics: IGameStatistics | null;
  ended: Date;
  created: Date;
}

export interface IGameStep {
  id: string;
  game: IGame | null;
  cell: number;
  emotion: GameFieldCellEmotionEnum | null;
  intensity: number | null;
  usefulness: number | null;
  reportAfter: Date | null;
  diceRoll: number | null;
  created: Date;
  report: IGameStepReportPartial | null;
  reportSkipped: boolean;
}

export interface IGameTalisman {
  id: string;
  precreated: PrecreatedTalismanEnum | null;
  objectId: string | null;
  downloadUrl: string | null;
  created: Date;
}

export interface IGameStepReportPartial {
  id: string;
  text: string;
  spirit: SpiritEnum | null;
  energy: EnergyEnum | null;
  created: Date;
}

export enum SpiritEnum {
  none = "none",
  earth = "earth",
  ether = "ether",
  water = "water",
  fire = "fire",
  wind = "wind",
}

export enum EnergyEnum {
  none = "none",
  male = "male",
  female = "female",
}

export interface IGameStatistics {
  id: string;

  // Spirit
  water: number;
  wind: number;
  fire: number;
  earth: number;
  ether: number;

  // Energy
  manEnergy: number;
  womanEnergy: number;

  // Emotions
  fear: number;
  anger: number;
  joy: number;
  sadness: number;

  // Chakras
  muladhara: number;
  svadhisthana: number;
  manipura: number;
  anahata: number;
  vishuddha: number;
  ajna: number;
  sahasrara: number;
  aura: number;

  // Levels
  material: number;
  enjoymentoflife: number;
  powerandmoney: number;
  relationships: number;
  inspiration: number;
  intuition: number;
  unity: number;
  spirituality: number;

  // Steps
  numberOfSteps: number;

  // Usefulness
  satisfaction: number;

  gamesCount: number;
}
