import type { Metadata } from "next";
import "../src/app/styles/globals.scss";
import Script from "next/script";

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
        {/* установка telegram-web-app */}
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
