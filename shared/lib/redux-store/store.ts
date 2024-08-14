import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/user-slice/userSlice";
import { ModalSlice } from "@/shared/lib/redux-store/slices/modal-slice/modalSlice";
import { ChatSlice } from "@/shared/lib/redux-store/slices/chat-slice/userSlice";
import { OptionSlice } from "@/shared/lib/redux-store/slices/option-slice/optionSlice";

export const store = () => {
  return configureStore({
    reducer: {
      user: UserSlice.userReducer,
      modal: ModalSlice.modalReducer,
      chat: ChatSlice.chatReducer,
      option: OptionSlice.optionReducer,
    },
    /**
     * You cant set up more middlewares
     * Check instruction: @see https://redux-toolkit.js.org/api/serializabilityMiddleware
     */
    middleware: (gDM) => gDM({ serializableCheck: false }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
