import "@/public/styles/globals.scss";
import Script from "next/script";
import StoreProvider from "../../shared/lib/redux-store/StoreProvider";
import { BootstrapTgWindow } from "../../shared/providers/BootstrapTgWindow";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </head>
      <body>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <BootstrapTgWindow>{children}</BootstrapTgWindow>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
