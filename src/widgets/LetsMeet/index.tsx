"use client";

import { LetsMeetDescription } from "./shared/layout/LetsMeetDescription";
import { ParalaxBackground } from "./shared/layout/ParalaxBackground";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { useState } from "react";
import { serverSideRedirect } from "@/shared/lib/utils/serverSideRedirect";
import useRequest from "@/shared/lib/hooks/useRequest";
import { authorize } from "./actions/authorise";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";

export const LetsMeetWidget = () => {
  usePreventOnSwipeWindowClose(true);
  const [stage, setSetstage] = useState(0);
  const isLastStage = stage === 2;

  const handleClick = () => {
    if (isLastStage) {
      return serverSideRedirect("signin");
    }
    setSetstage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  useRequest(async () => {
    const authRes = await authorize();
    console.log("set cookies", authRes);
  }, []);

  return (
    <div className="fade-in flex h-screen flex-col justify-between overflow-hidden">
      <ParalaxBackground stage={stage} />
      <LetsMeetDescription className="w-fit" stage={stage} />
      <section className="p-5">
        <div className="flex flex-col items-center gap-3">
          {isLastStage ? (
            <ButtonLink variant="yellow" href="signin">
              Начнем!
            </ButtonLink>
          ) : (
            <Button onClick={handleClick}>Далее</Button>
          )}
        </div>
      </section>
    </div>
  );
};
