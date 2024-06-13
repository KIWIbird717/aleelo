"use client";

import { LetsMeetDescription } from "./shared/layout/LetsMeetDescription";
import { ParalaxBackground } from "./shared/layout/ParalaxBackground";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LetsMeetWidget = () => {
  usePreventOnSwipeWindowClose(true);
  const [stage, setSetstage] = useState(0);
  const router = useRouter();
  const isLastStage = stage === 2;

  const handleClick = () => {
    if (stage === 2) {
      return router.push("/getting-started/auth");
    }
    setSetstage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  return (
    <div className="fade-in flex h-screen flex-col justify-between overflow-hidden">
      <ParalaxBackground stage={stage} />
      <LetsMeetDescription className="w-fit" stage={stage} />
      <section className="p-5">
        <div className="flex flex-col items-center gap-3">
          {isLastStage ? (
            <ButtonLink variant="yellow" href="/getting-started/auth">
              Начнем!
            </ButtonLink>
          ) : (
            <Button onClick={handleClick}>Далее</Button>
          )}
          {/* <Button onClick={() => setSetstage(0)}>update</Button> */}
        </div>
      </section>
    </div>
  );
};
