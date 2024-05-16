import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Nav from "../components/nav"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "template web site",
  description: "put description of the business here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}</body>
    </html>
  );
}
