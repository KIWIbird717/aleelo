import { useState } from "react";

export const useStages = () => {
  const [stage, setStage] = useState(0);

  const next = () => {
    setStage((state) => (state += 1));
  };

  return { stage, next };
};
