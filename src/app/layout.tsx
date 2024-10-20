import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Home from "./components/home";

export const metadata: Metadata = {
  title: "View",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Home>{children}</Home>
      </body>
    </html>
  );
}
