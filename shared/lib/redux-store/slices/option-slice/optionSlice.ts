import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IOptionSlice } from "@/shared/lib/redux-store/slices/option-slice/type";

export namespace OptionSlice {
  const initialState: IOptionSlice = {
    isShowOption: true,
    isShowInput: false,
    message: null,
    key: null,
    blockType: null,
  };

  export const optionSlice = createSlice({
    name: "option",
    initialState,
    reducers: {
      setOption: (state, action) => {
        state.message = action.payload.message;
        state.key = action.payload.key;
      },
      setBlockType: (state, action) => {
        state.blockType = action.payload.blockType;
      },
      setShowOption: (state) => {
        state.isShowOption = true;
      },
      setHideOption: (state) => {
        state.isShowOption = false;
      },
      setShowInput: (state) => {
        state.isShowInput = true;
      },
      setHideInput: (state) => {
        state.isShowInput = false;
      },
    },
  });

  export const {
    setShowOption,
    setHideOption,
    setBlockType,
    setOption,
    setShowInput,
    setHideInput,
  } = optionSlice.actions;
  export const optionReducer = optionSlice.reducer;
  export type Type = IOptionSlice;
}
