import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export namespace UserSlice {
  export interface IUserSlice {
    name: string | null;
  }

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
