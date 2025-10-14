import type { Metadata } from "next";
import { rem } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SCI - UPTC",
  description: "Scientific Production Analysis for UPTC Research Groups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rem.className} antialiased`}>{children}</body>
    </html>
  );
}
