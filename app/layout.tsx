import type { Metadata } from "next";
import "../src/app/styles/globals.scss";
import Script from "next/script";
import StoreProvider from "@/shared/lib/redux-store/StoreProvider";
import { BootstrapTgWindow } from "@/shared/layout/BootstrapTgWindow";

export const metadata: Metadata = {
  title: "Aleeo",
  description: "Aleeo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
