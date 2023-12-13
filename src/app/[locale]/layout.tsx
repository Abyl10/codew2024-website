import type { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { WithChildren } from "@/ts/types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type LocaleLayoutParams = { params: { locale: string } };

type LocaleLayoutProps = PropsWithChildren<LocaleLayoutParams>;

const RootLayout = ({
  children,
  params: { locale },
}: WithChildren<LocaleLayoutProps>) => {
  const lce = useLocale();

  if (locale !== lce) return notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
