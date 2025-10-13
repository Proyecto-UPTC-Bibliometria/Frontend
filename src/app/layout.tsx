import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
