import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const NueHaas = localFont({
  src: [
    {
      path: "../fonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Transviti Test",
  description: "created by Tanzeel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NueHaas.className} antialiased`}>{children}</body>
    </html>
  );
}
