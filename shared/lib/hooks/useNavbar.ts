import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GameService } from "@/shared/lib/services/game";
import useSWR from "swr";

export enum CenterButtonIconTypes {
  DiceRollActive = "diceRollActive",
  DiceRollUnActive = "diceRollUnActive",
  ReportActive = "reportActive",
  ReportUnActive = "reportUnActive",
  BackIcon = "backIcon",
}

export const useNavbar = (isBack?: boolean) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [centerButtonIcon, setCenterButtonIcon] = useState<CenterButtonIconTypes>(
    CenterButtonIconTypes.DiceRollActive,
  );

  const { data } = useSWR("/game/status", GameService.getGameStatus);
  const path = usePathname() || "";

  const pathName = path.split("/").pop();
  const pageName = path.split("/")[2];

  const isPracticePage = pathName === "practice";
  const isCellPage = pageName === "cell" || pathName === "cell";
  const isChatPage = pageName === "chat";
  const isDiceRollPage = pathName === "diceroll";

  useEffect(() => {
    if (data?.data.currentStep) {
      const { report, reportAfter, reportSkipped, diceRoll } = data.data.currentStep;

      const isReportActive = report === null && !reportSkipped;
      const isDiceRollActive = new Date(reportAfter) <= new Date() && diceRoll;

      if (isBack && (isCellPage || isChatPage || isDiceRollPage)) {
        setCenterButtonIcon(CenterButtonIconTypes.BackIcon);
        setIsDisabled(false);
      } else if (isDiceRollActive) {
        setCenterButtonIcon(CenterButtonIconTypes.DiceRollActive);
        setIsDisabled(false);
      } else if (!isDiceRollActive) {
        setCenterButtonIcon(CenterButtonIconTypes.DiceRollUnActive);
        setIsDisabled(true);
      } else if (isReportActive) {
        setCenterButtonIcon(CenterButtonIconTypes.DiceRollUnActive);
        setIsDisabled(false);
      } else {
        setCenterButtonIcon(CenterButtonIconTypes.ReportActive);
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
    setIsDisabled,
    setCenterButtonIcon,
  };
};
