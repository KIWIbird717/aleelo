import { useEffect, useState } from "react";
import useSWR from "swr";
import { GameService } from "@/shared/lib/services/game";
import { useSearchParams } from "next/navigation";

export const useActiveCell = () => {
  const { data } = useSWR("/game/status", GameService.getGameStatus);
  const currentCell = data ? data.data.currentStep.cell : 1
  const searchParams = useSearchParams();
  const result = searchParams.get("cell");
  const cell = Number(result)

  const [activeCell, setActiveCell] = useState<number>(currentCell);

  useEffect(() => {
    if (activeCell < cell) {
      const interval = setInterval(() => {
        setActiveCell((prev) => {
          if (prev < cell) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [cell, activeCell]);


  return { activeCell }
}