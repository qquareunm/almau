import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "../components/Context/Context";
import cn from "classnames";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ScrollBtn } from "../components/ScrollBtn/ScrollBtn";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(inter.className)}>
        <AuthProvider>
          <Header />
          {children}
          <ScrollBtn />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
