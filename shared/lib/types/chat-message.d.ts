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
  key: GameChatBlockMessage | null;
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
  Passed = "PASSED",
  NotPassed = "NOT_PASSED",
}

export type GameChatBlockMessage =
  | "chooseSphereImportantMoment"
  | "chooseSphereCloseEyesAndThink"
  | "letsCreateGameRequest"
  | "whatWouldYouLikeToChangeInThisSphere"
  | "mostImportantThatYourRequestMustBe"
  | "goodRequestCriteria"
  | "isItClearNowWhatToWrite"
  | "sureSendYouSamples"
  | "requestExamplesList"
  | "awesomeThenClickAndSetRequest"
  | "goodJobNowClickGameButton"

  // Submit report
  | "itsTimeToSubmitReport"
  | "submitStepUsefullnessItsTimeToMoveForward"
  | "submitStepUsefullnessHowUsefullWasIt"

  // Submit report 1
  | "report1Intro"
  | "report11L"
  | "report11R"
  | "report12L"
  | "report12R"
  | "report13"

  // Submit report 2
  | "report2Intro"
  | "report21L"
  | "report21R"
  | "report22L"
  | "report22R"
  | "report23"

  // Submit report 3
  | "report3Intro"
  | "report31L"
  | "report31R"
  | "report32L"
  | "report32R"
  | "report33"

  // Submit report 4
  | "report4Intro"
  | "report41L"
  | "report41R"
  | "report42L"
  | "report42R"
  | "report43"

  // Submit report 5
  | "report5Intro"
  | "report51L"
  | "report51R"
  | "report52L"
  | "report52R"
  | "report53"

  // Submit report 6
  | "report6Intro"
  | "report61L"
  | "report61R"
  | "report62L"
  | "report62R"
  | "report63"

  // Submit onboarding report
  | "onboarding_report"
  | "onboarding_report_response"

  // Submit final report
  | "youLivedALifeHero"
  | "itsTimeToSubmitFinalReport"
  | "assessYourSphere"
  | "suggestAnotherRequest"
  | "chooseThreeBestSpheres"
  | "assessEverySphere"
  | "whatAboutNewGameWithThisSphere"
  | "suggestSameSphere"

  // Practices
  | "practice_start"
  | "practice_out"
  | "practice_start_2"
  | "practice_done"
  | "practice_hints_motivation"
  | "practice_start_writing"
  | "first_practice"
  | "practice_passed"
  | `practice_${GameCellId}_1`;
