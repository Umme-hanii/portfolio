import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umme Hani | Portfolio",
  description:
    "My Portfolio website showcasing my personal and professional skills ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative pt-28 sm:pt-36`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
