"use client";

import { LetsMeetDescription } from "./shared/layout/LetsMeetDescription";
import { ParalaxBackground } from "./shared/layout/ParalaxBackground";
import { usePreventOnSwipeWindowClose } from "../../shared/lib/hooks/usePreventSwipeClose";
import { Button } from "../../shared/ui/Button/Button";
import { ButtonLink } from "../../shared/ui/ButtonLink";
import { useStages } from "./shared/hooks/useStages";
import { useJwtAuthCheck } from "./shared/hooks/useJwtAuthCheck";

export const LetsMeetWidget = () => {
  useJwtAuthCheck();
  usePreventOnSwipeWindowClose(true);

  const { stage, handleStageChange, isLastStage } = useStages();

  return (
    <div className="flex h-screen flex-col justify-between overflow-hidden">
      <ParalaxBackground stage={stage} />
      <LetsMeetDescription className="w-fit" stage={stage} />
      <section className="p-5">
        <div className="flex flex-col items-center gap-3">
          {isLastStage ? (
            <ButtonLink variant="yellow" href="signin">
              Начнем!
            </ButtonLink>
          ) : (
            <Button onClick={handleStageChange}>Далее</Button>
          )}
        </div>
      </section>
    </div>
  );
};
