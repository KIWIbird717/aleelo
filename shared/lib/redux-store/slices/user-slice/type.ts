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
  profile: UserType | null;
  jwt: string | null;
  refreshToken: string | null;
}
