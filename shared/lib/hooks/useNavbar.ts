import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GameService } from "@/shared/lib/services/game";
import useSWR from "swr";

export const useNavbar = (isBack?: boolean) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [centerButtonIcon, setCenterButtonIcon] = useState<string>("diceRollActive");

  const { data } = useSWR("/game/status", GameService.getGameStatus);
  const path = usePathname() || "";

  const pathName = path.split("/").pop();
  const pageName = path.split("/")[2];

  const isPracticePage = pathName === "practice";
  const isCellPage = pageName === "cell" || pathName === "cell";
  const isChatPage = pageName === "chat";
  const isDiceRollPage = pathName === "diceroll";

  console.log({isDisabled, centerButtonIcon, pathName, path});

  useEffect(() => {
    if (data?.data.currentStep) {
      const { report, reportAfter, reportSkipped } = data.data.currentStep;

      const isReportActive = report === null && !reportSkipped;
      const isReportUnActive = !isReportActive && report === null;
      const isDiceRollActive = new Date(reportAfter) <= new Date();

      console.log({isBack});

      if (isBack && (isCellPage || isChatPage || isDiceRollPage)) {
        setCenterButtonIcon("backIcon");
        setIsDisabled(false);
      } else if (isDiceRollActive) {
        setCenterButtonIcon("diceRollActive");
        setIsDisabled(false);
      } else if (!isDiceRollActive) {
        setCenterButtonIcon("diceRollUnActive");
        setIsDisabled(true);
      } else if (isReportActive) {
        setCenterButtonIcon("reportActive");
        setIsDisabled(false);
      } else {
        setCenterButtonIcon("reportUnActive");
        setIsDisabled(true);
      }
    }
  }, [data, isBack, isCellPage, isChatPage, isDiceRollPage, isPracticePage]);

  const handleDisable = () => setIsDisabled(true);
  const handleValid = () => setIsDisabled(false);

  return {
    diceRoll: data?.data.currentStep.diceRoll,
    isDisabled,
    centerButtonIcon,
    handleDisable,
    handleValid,
  };
};
