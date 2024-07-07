import { serverSideRedirect } from "@/shared/lib/utils/serverSideRedirect";
import { useCallback, useState } from "react";

export const useStages = () => {
  const [stage, setStage] = useState(0);
  const isLastStage = stage === 2;

  const handleStageChange = useCallback(() => {
    if (isLastStage) {
      return serverSideRedirect("signin");
    }
    setStage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  }, [isLastStage]);

  return { stage, handleStageChange, isLastStage };
};
