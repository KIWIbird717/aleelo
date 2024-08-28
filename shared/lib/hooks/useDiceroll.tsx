import { useEffect, useState } from "react";
import { GameService } from "@/shared/lib/services/game";
import { Logger } from "@/shared/lib/utils/logger/Logger";


export const useDiceRoll = () => {
  const logger = new Logger("useDiceRoll");
  const [currentStep, setCurrentStep] = useState<{cell: number, diceRoll: number} | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const {data} = await GameService.makeStep()
        console.log({data});
        setCurrentStep({
          cell: data.currentStep.cell,
          diceRoll: data.currentStep.diceRoll
        })
      } catch (error) {
        logger.error(error)
      }
    })()
  }, []);

  console.log({currentStep});

  return {
    cell: currentStep?.cell,
    diceRoll: currentStep?.diceRoll
  }
}