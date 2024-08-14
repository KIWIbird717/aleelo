import { UserServiceTypes } from "@/shared/lib/services/user/types";

type UserType = {
  accessLevel: null | string;
  anonymous: boolean;
  created: string;
  email: string;
  energy: null | number;
  id: string;
  name: null | string;
  onboardingStatus: "NOT_PASSED" | string;
  spirit: null | number;
};
export interface IUserSlice {
  profile: UserServiceTypes.UserResType | null;
  jwt: string | null;
  refreshToken: string | null;
}

// export enum SpiritType {
//   none = 'none',
//   earth = 'earth',
//   ether = 'ether',
//   water = 'water',
//   fire = 'fire',
//   wind = 'wind',
// }
//
// export enum EnergyType {
//   none = 'none',
//   male = 'male',
//   female = 'female',
// }

export interface SpiritType {
  earth: "earth";
  ether: "ether";
  water: "water";
  fire: "fire";
  wind: "wind";
}

export interface EnergyType {
  male: "male";
  female: "female";
}
