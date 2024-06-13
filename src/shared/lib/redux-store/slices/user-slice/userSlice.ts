import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserSlice } from "./type";

export namespace UserSlice {
  const initialState: IUserSlice = {
    name: null,
  };

  export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setUsername: (state, action: PayloadAction<IUserSlice["name"]>) => {
        state.name = action.payload;
      },
    },
  });

  export const { setUsername } = userSlice.actions;
  export const userReducer = userSlice.reducer;
}
