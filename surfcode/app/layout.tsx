import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SurfCode",
  description: "Consultoria a tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logoSurfCode.jpeg" type="image/jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
