"use client";

import { useState } from "react";

export const useStages = () => {
  const [stage, setStage] = useState(0);

  const next = (stageToSet?: number) => {
    if (!stageToSet) {
      return setStage((state) => (state += 1));
    }
    setStage(stageToSet);
  };

  return { stage, next };
};
