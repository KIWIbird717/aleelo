import { AxiosRequestConfig } from "axios";
import { serverApi } from "../../axios";
import { errorHandler } from "../../utils/error-handler";
import { UserServiceTypes } from "./types";
import ISettings = UserServiceTypes.ISettings;

export namespace UserService {
  const thisName = (serviceName: string) => {
    const namespaceName = "UserService";
    return `${namespaceName} > ${serviceName}`;
  };

  /**
   * GET /auth/profile
   */
  export const profile = () => {
    return errorHandler(
      thisName("profile"),
      serverApi.get<UserServiceTypes.UserResType>("/auth/profile"),
    );
  };

  /**
   * DELETE /settings
   */
  export const deleteProfile = () => {
    return errorHandler(
      thisName("deleteProfile"),
      serverApi.delete("/auth/profile"),
    );
  };

  /*
   * GET /settings
   * */
  export const settings = () => {
    return errorHandler("settings", serverApi.get<ISettings>("/settings"));
  };

  /**
   * POST /auth/telegram
   *
   * @param headers.accept - The type of content that is acceptable for the response.
   * @param headers["Authorization-tma"] - provided Telegram.initData in format: 'tma ${telegram.initData}'
   */
  export const authTelegram = (headers: AxiosRequestConfig["headers"]) => {
    return errorHandler(
      thisName("authTelegram"),
      serverApi.post<UserServiceTypes.AuthTelegramResType>("/auth/telegram", {}, { headers }),
    );
  };

  /**
   * POST /settings
   */
  export const updateSettings = (data: UserServiceTypes.UpdateSettingsData) => {
    return errorHandler(
      thisName("updateSettings"),
      serverApi.post<UserServiceTypes.UpdateSettingsResType>("/settings", data),
    );
  };
}
