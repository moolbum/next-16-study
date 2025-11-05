"use client";

import { useTheme } from "@/stores/useTheme/useTheme";
import { Moon, Sun } from "lucide-react";

export const DefaultHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-end gap-2 w-full h-16 px-4 bg-background border-b">
      {theme === "light" ? (
        <Sun onClick={toggleTheme} className="size-8 cursor-pointer" />
      ) : (
        <Moon onClick={toggleTheme} className="size-8 cursor-pointer" />
      )}
    </header>
  );
};
