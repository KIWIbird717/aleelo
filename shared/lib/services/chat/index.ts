import { serverApi } from "../../axios";
import { errorHandler } from "../../utils/error-handler";
import { Pagination, PostMessageOptions } from "@/shared/lib/types/chat";


export namespace ChatService {
  const thisName = (serviceName: string) => {
    const namespaceName = "ChatService";
    return `${namespaceName} > ${serviceName}`;
  };

  //POST /game-chat/post-message
  export const postMessage = (options: PostMessageOptions) => {
    return errorHandler(thisName("postMessage"), serverApi.post("/game-chat/post-message", options));
  };

  //GET /game-chat/list/${chatId}
  export const getMessages = (chatId: string, pagination: Pagination) => {
    return errorHandler(thisName("getMessages"), serverApi.post(
        `game-chat/list/${chatId}`,
        { params: pagination },
      ),
    );
  };

  //POST /game-chat/start-report
  export const startReportDialog = () => {
    return errorHandler(thisName("startReportDialog"), serverApi.post("/game-chat/start-report"));
  };

  //PUT /game-chat/onboarding-report/start
  export const startOnboardingReport = () => {
    return errorHandler(thisName("startOnboardingReport"), serverApi.put("/game-chat/onboarding-report/start"));
  };

  //POST /game-chat/start-practice
  export const startPracticeDialog = (gameId: string, cellId: number) => {
    return errorHandler(thisName("startPracticeDialog"), serverApi.post("/game-chat/start-practice", {
      gameId,
      cellId,
    }));
  };

  //PUT /game-chat/practices/${practiceId}/send-message
  export const sendPracticeMessage = (practiceId: string) => {
    return errorHandler(thisName("sendPracticeMessage"), serverApi.put(`/game-chat/practices/${practiceId}/send-message`));
  };

  //POST /game-chat/start-final-report
  export const startFinalReportDialog = () => {
    return errorHandler(thisName("startFinalReportDialog"), serverApi.post("/game-chat/start-final-report"));
  };

  //POST /game-chat/create-game
  export const createGame = () => {
    return errorHandler(thisName("createGame"), serverApi.post("/game-chat/create-game"));
  };

  //POST /game-chat/reset-game
  export const resetGame = () => {
    return errorHandler(thisName("resetGame"), serverApi.post("/game-chat/reset-game"));
  };
}
