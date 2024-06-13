import type { Metadata } from "next";
import "../../src/app/styles/globals.scss";
import Script from "next/script";
import StoreProvider from "@/shared/lib/redux-store/StoreProvider";
import { BootstrapTgWindow } from "@/shared/providers/BootstrapTgWindow";
import { AuthSessionProvider } from "@/shared/providers/AuthSessionProvider";

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
          <AuthSessionProvider>
            <BootstrapTgWindow>{children}</BootstrapTgWindow>
          </AuthSessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
