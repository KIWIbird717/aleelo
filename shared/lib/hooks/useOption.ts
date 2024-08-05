import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";
import { OptionSlice } from "@/shared/lib/redux-store/slices/option-slice/optionSlice";
import { GameChatBlockUserResponseEnum } from "@/shared/lib/types/game-chat-block-user-response";
import { GameChatBlockEnum } from "@/shared/lib/types/game-chat-blocks";

export const useOption = () => {
  const dispatch = useAppDispatch();
  const optionState = useAppSelector((state) => state.option);

  const hideOption = () => dispatch(OptionSlice.setHideOption());
  const showOption = () => dispatch(OptionSlice.setShowOption());

  const hideInput = () => dispatch(OptionSlice.setHideInput());
  const showInput = () => dispatch(OptionSlice.setShowInput());

  const onChangeChoose = ( message: string | null, key: GameChatBlockUserResponseEnum | null) => {
    dispatch(OptionSlice.setOption({ key: key, message: message}))
  }

  const onChangeBlockType = (blockType:  GameChatBlockEnum | null) => {
    dispatch(OptionSlice.setBlockType(blockType))
  }

  return {
    hideOption,
    hideInput,
    showOption,
    showInput,
    optionState,
    onChangeChoose,
    onChangeBlockType
  };
};