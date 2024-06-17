import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserSlice } from "./type";

export namespace UserSlice {
  const initialState: IUserSlice = {
    profile: null,
    jwt: null,
    refreshToken: null,
  };

  export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setProfile: (state, action: PayloadAction<IUserSlice["profile"]>) => {
        state.profile = action.payload;
      },
      setJwt: (state, action: PayloadAction<IUserSlice["jwt"]>) => {
        state.jwt = action.payload;
      },
    },
  });

  export const { setProfile, setJwt } = userSlice.actions;
  export const userReducer = userSlice.reducer;
  export type Type = IUserSlice;
}
