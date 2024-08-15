"use client";

import { LetsMeetDescription } from "./shared/layout/LetsMeetDescription";
import { ParalaxBackground } from "./shared/layout/ParalaxBackground";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { useStages } from "./shared/hooks/useStages";
import { useJwtAuth } from "./shared/hooks/useJwtAuth";
import { View } from "@/shared/layout/View";

export const LetsMeetWidget = () => {
  useJwtAuth(); // автоматически авторизуем пользователя пока происходит онбординг
  usePreventOnSwipeWindowClose(true);

  const { stage, handleStageChange, isLastStage } = useStages();

  return (
    <View
      backgroundEffect="vignette"
      className="flex h-screen flex-col justify-between overflow-hidden"
    >
      <ParalaxBackground stage={stage} />
      <LetsMeetDescription className="w-fit" stage={stage} />
      <section className="p-5">
        <div className="flex flex-col items-center gap-3">
          {isLastStage ? (
            <ButtonLink variant="yellow" href="onboarding/map">
              Начнем!
            </ButtonLink>
          ) : (
            <Button onClick={handleStageChange}>Далее</Button>
          )}
        </div>
      </section>
    </View>
  );
};
