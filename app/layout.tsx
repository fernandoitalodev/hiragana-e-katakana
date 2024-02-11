import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Katakana e Hiragana",
  description:
    "Pratique seu conhecimento de Hiragana e katakana, fixando o conteúdo de uma forma fácil e divertida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-BR" className="light">
      <body className={inter.className}>
        <Providers>
          
          {children}</Providers>
      </body>
    </html>
  );
}
