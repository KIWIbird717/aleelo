"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const AuthSessionProvider: FC<Props> = async (props) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
