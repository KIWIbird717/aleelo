import { GameServiceTypes } from "@/shared/lib/services/game/types";
import GameSphere = GameServiceTypes.GameSphereEnum;

export type ReportScoreType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface IGameFinalReport {
  id: string;
  sphere: GameSphere;
  score: ReportScoreType;
  created: Date;
}
