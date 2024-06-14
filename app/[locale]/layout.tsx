import type { Metadata } from "next";
import "../../src/app/styles/globals.scss";
import Script from "next/script";
import StoreProvider from "@/shared/lib/redux-store/StoreProvider";
import { BootstrapTgWindow } from "@/shared/providers/BootstrapTgWindow";

export const metadata: Metadata = {
  title: "Aleeo",
  description: "Aleeo",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale}>
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body>
        <StoreProvider>
          <BootstrapTgWindow>{children}</BootstrapTgWindow>
        </StoreProvider>
      </body>
    </html>
  );
}
