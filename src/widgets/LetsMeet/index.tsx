"use client";

import { LetsMeetDescription } from "./shared/layout/LetsMeetDescription";
import { ParalaxBackground } from "./shared/layout/ParalaxBackground";
import { usePreventOnSwipeWindowClose } from "@/shared/lib/hooks/usePreventSwipeClose";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { useEffect, useState } from "react";
import { serverSideRedirect } from "@/shared/lib/utils/serverSideRedirect";
import useRequest from "@/shared/lib/hooks/useRequest";
import { authorize } from "./actions/authorize";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { getCookie, setCookie } from "cookies-next";
import Cookies from "js-cookie";

const isServer = typeof window === "undefined";

export const LetsMeetWidget = () => {
  const logger = new Logger(LetsMeetWidget.name);

  usePreventOnSwipeWindowClose(true);
  const [stage, setStage] = useState(0);
  const isLastStage = stage === 2;

  const handleClick = () => {
    if (isLastStage) {
      return serverSideRedirect("signin");
    }
    setStage((state) => {
      if (state > 1) return state;
      return (state += 1);
    });
  };

  useRequest(async () => {
    if (!isServer) {
      const authRes = await authorize();
      logger.debug("Set jwt token", { authRes });
      fetch("/api/cookies", { method: "POST", body: JSON.stringify({ jwt: authRes.jwt }) });
      Cookies.set("jwt2", authRes.jwt);
    }
  }, [isServer]);

  useEffect(() => {
    if (!isServer) {
      setTimeout(async () => {
        const testCookies = await fetch(`/api/cookies`).then((res) => res.json());
        logger.debug("Cookies from server request testCookies:", testCookies);
        logger.debug("Cookies jwt2:", Cookies.get("jwt2"));
      }, 5000);
    }
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
