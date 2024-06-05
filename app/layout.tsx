import type { Metadata } from "next";
import "../src/app/styles/globals.scss";
import Head from "next/head";
import Script from "next/script";
import StoreProvider from "@/shared/lib/redux-store/StoreProvider";

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
