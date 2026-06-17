"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/src/shared/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex cursor-pointer rounded-b border border-sky-200 bg-white px-4 py-2 shadow-md transition hover:bg-sky-50 dark:border-sky-800 dark:bg-gray-900 dark:hover:bg-gray-800 print:hidden"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex cursor-pointer rounded-b border border-sky-200 bg-white px-4 py-2 shadow-md transition hover:bg-sky-50 dark:border-sky-800 dark:bg-gray-900 dark:hover:bg-gray-800 print:hidden"
    >
      {theme === "dark" ? (
        <SunIcon className="text-sky-700 dark:text-sky-400" />
      ) : (
        <MoonIcon className="text-sky-700" />
      )}
    </button>
  );
}
