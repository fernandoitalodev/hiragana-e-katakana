// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme={theme === undefined ? "light" : theme}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
