import { errorHandler } from "@/shared/lib/utils/error-handler";
import { serverApi } from "@/shared/lib/axios";
import { IPagination } from "@/shared/lib/types/chat";
import { IPractice } from "@/shared/lib/services/practice/type";

export namespace PracticeService {
  const thisName = (serviceName: string) => {
    const namespaceName = "PracticeService";
    return `${namespaceName} > ${serviceName}`;
  };

  //GET game/practices
  export const getPractices = (gameId: string, pagination: IPagination) => {
    return errorHandler(
      thisName("getPractices"),
      serverApi.get<Array<IPractice>>("/game/practices",
        {
          params: { ...pagination, gameId },
        }
        ),
    );
  };
}