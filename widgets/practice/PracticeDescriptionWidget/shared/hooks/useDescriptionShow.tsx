import { useState } from "react";

export const useDescriptionShow = () => {
  const [isShowText, setIsShowText] = useState(false);
  const onShow = () => {
    if (!isShowText) {
      setIsShowText(true);
    }
  };

  const onHide = () => {
    if (isShowText) {
      setIsShowText(false);
    }
  };

  return { isShowText, onShow, onHide };
};
