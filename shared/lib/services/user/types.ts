export namespace UserServiceTypes {
  export enum UserOnboardingStatus {
    PASSED = "PASSED",
    NOT_PASSED = "NOT_PASSED",
  }

  export enum Gender {
    male = "male",
    female = "female",
    human = "human",
    xGender = "xGender",
  }

  export type UserResType = {
    id: string;
    name: string | null;
    email: string;
    anonymous: boolean;
    created: Date;
    onboardingStatus: UserOnboardingStatus;
  };

  export type AuthTelegramResType = {
    jwt: string;
    refreshToken: string;
  };

  export interface UpdateSettingsData {
    reportNotificationHour?: number;
    reportNotificationMinutes?: number;
    name: string;
    gender: Gender;
  }

  export type UpdateSettingsResType = Partial<UpdateSettingsData>;
}
