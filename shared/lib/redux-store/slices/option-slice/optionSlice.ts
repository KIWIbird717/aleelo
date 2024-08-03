import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IOptionSlice } from "@/shared/lib/redux-store/slices/option-slice/type";


export namespace OptionSlice {
  const initialState: IOptionSlice = {
    isShow: false,
    message: null,
    key: null,
    blockType: null
  };

  export const optionSlice = createSlice({
    name: "option",
    initialState,
    reducers: {
      setOption: (state, action) => {
        state.message = action.payload.message
        state.key = action.payload.key
      },
      setBlockType: (state, action ) => {
        state.blockType = action.payload.blockType
      },
      setShowOption: (state) => {
        state.isShow = true
      },
      setHideOption: (state) => {
        state.isShow = false
      },
    },
  });

  export const { setShowOption, setHideOption, setBlockType, setOption } = optionSlice.actions;
  export const optionReducer = optionSlice.reducer;
  export type Type = IOptionSlice;
}
