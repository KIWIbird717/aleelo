import { EnergyType, SpiritType } from "@/shared/lib/redux-store/slices/user-slice/type";

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
    accessLevel: null | string;
    spirit: null | SpiritType;
    energy: null | EnergyType;
    onboardingStatus: UserOnboardingStatus;
    created: Date;
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

  export interface ISettings {
    reportNotificationHour: number
    reportNotificationMinutes: number
    gender: Gender
    name: string
  }
}
