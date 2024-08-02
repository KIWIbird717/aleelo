export namespace GameServiceTypes {
  /*
   * Слава
   * Семья
   * Здоровье
   * Деньги
   * Любовь
   * Духовность
   * Самореализация
   * */
  export enum GameSphereEnum {
    glory = "glory",
    family = "family",
    health = "health",
    money = "money",
    love = "love",
    spirituality = "spirituality",
    selfRealization = "selfRealization",
  }
  export enum GameStatusEnum {
    inGame = "inGame",
    ended = "ended",
  }

  type GameModelSnapshotType = {
    id: string;
    request: string | null;
    sphere: null | GameSphereEnum;
    status: GameStatusEnum;
    talisman: null;
    created: Date;
    ended: null | Date;
  };

  /** GET /game/status */
  export type GameStatusResult = {
    game: {
      request: any | null;
      status: string;
      ended: any | null;
      sphere: any | null;
      id: string;
      created: string;
      talisman: any | null;
      chat: {
        id: string;
        created: string;
      };
    };
    currentStep: {
      cell: number;
      diceRoll: any | null;
      reportAfter: string;
      intensity: any | null;
      emotion: any | null;
      reportSkipped: boolean;
      id: string;
      usefulness: any | null;
      created: string;
      report: any | null;
    };
    stepsCount: number;
    practiceCompleted: boolean;
    numberOfGames: number;
  };
}
