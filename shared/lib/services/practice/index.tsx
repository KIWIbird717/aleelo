import { errorHandler } from "@/shared/lib/utils/error-handler";
import { serverApi } from "@/shared/lib/axios";
import { IPractice } from "@/shared/lib/services/practice/type";

export namespace PracticeService {
  const thisName = (serviceName: string) => {
    const namespaceName = "PracticeService";
    return `${namespaceName} > ${serviceName}`;
  };

  //GET game/practice
  export const getPractices = (params: { limit?: number; offset?: number; gameId?: string }) => {
    return errorHandler(
      thisName("getPractices"),
      serverApi.get<Array<IPractice>>("/game/practices", { params }),
    );
  };
}