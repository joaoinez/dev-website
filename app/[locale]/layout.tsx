import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "João Inez - Freelance Web Developer",
  description:
    "I craft bold digital experiences that make businesses stand out. Your website should be as unique as your vision — and I'm here to make that happen. Ready to build something exceptional?",
  keywords: [
    "freelance web developer",
    "web development",
    "frontend developer",
    "react developer",
    "responsive design",
    "digital experiences",
    "bold websites",
    "custom web solutions",
  ],
  authors: [{ name: "João Inez" }],
  creator: "João Inez",
  publisher: "João Inez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev.joaoinez.me",
    title: "João Inez - Freelance Web Developer",
    description:
      "I craft bold digital experiences that make businesses stand out. Your website should be as unique as your vision — and I'm here to make that happen.",
    siteName: "João Inez Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scatterhead Comics",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${satoshi.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
