import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";
import { OptionSlice } from "@/shared/lib/redux-store/slices/option-slice/optionSlice";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";
import { useEffect } from "react";

export const useOption = () => {
  const dispatch = useAppDispatch();
  const optionState = useAppSelector((state) => state.option);

  const hide = () => dispatch(OptionSlice.setHideOption());
  const show = () => dispatch(OptionSlice.setShowOption());

  const onChangeChoose = ( message: string | null, key: GameChatBlockUserResponseEnum | null) => {
    dispatch(OptionSlice.setOption({ key: key, message: message}))
  }

  const onChangeBlockType = (blockType:  GameChatBlockEnum | null) => {
    dispatch(OptionSlice.setBlockType(blockType))
  }

  return {
    hide,
    show,
    optionState,
    onChangeChoose,
    onChangeBlockType
  };
};