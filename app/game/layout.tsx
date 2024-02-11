"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full">
      <div className="absolute right-3 top-3">
        <ThemeToggle />
      </div>
      <div className="m-auto h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
