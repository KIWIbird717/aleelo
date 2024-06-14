"use client";

import { LetsMeetDescription } from "./shared/layout/LetsMeetDescription";
import { ParalaxBackground } from "./shared/layout/ParalaxBackground";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { serverApi } from "@/shared/lib/axios";
import { LoaderCircle } from "lucide-react";

export const LetsMeetWidget = () => {
  usePreventOnSwipeWindowClose(true);
  const [stage, setSetstage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const isLastStage = stage === 2;

  const handleClick = () => {
    if (isLastStage && !isLoading) {
      return router.push("signin");
    }
    setSetstage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        await serverApi.post(`/auth/anonymous`)
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false)
      }
    })()
  }, [router])


  return (
    <div className="fade-in flex h-screen flex-col justify-between overflow-hidden">
      <ParalaxBackground stage={stage} />
      <LetsMeetDescription className="w-fit" stage={stage} />
      <section className="p-5">
        <div className="flex flex-col items-center gap-3">
          {isLastStage ? (
            <ButtonLink variant="yellow" href="signin">
              {isLoading ? <LoaderCircle className="animate-spin" /> : "Начнем!"}
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
