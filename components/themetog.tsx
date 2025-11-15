"use client";

import { Monitor } from "@phosphor-icons/react/dist/csr/Monitor";
import { Moon } from "@phosphor-icons/react/dist/csr/Moon";
import { SunHorizon } from "@phosphor-icons/react/dist/csr/SunHorizon";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

const UnifiedThemeToggle = () => {
  const { setTheme: themesetter, theme } = useTheme();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "u") {
        e.preventDefault();
        themesetter(theme === "light" ? "dark" : "light");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [themesetter, theme]);

  return (
    <div className="fixed bottom-2 left-4 z-50 flex gap-1">
      {theme === "dark" && (
        <Button
          onClick={() => themesetter("light")}
          size="icon"
          className="bg-transparent"
          variant="outline"
          aria-label="switch to light theme"
        >
          <SunHorizon />
        </Button>
      )}
      {theme === "light" && (
        <Button
          onClick={() => themesetter("system")}
          size="icon"
          className="bg-transparent"
          variant="outline"
          aria-label="switch to system theme"
        >
          <Monitor />
        </Button>
      )}
      {theme === "system" && (
        <Button
          onClick={() => themesetter("dark")}
          size="icon"
          className="bg-transparent"
          variant="outline"
          aria-label="switch to dark theme"
        >
          <Moon />
        </Button>
      )}
    </div>
  );
};

export default UnifiedThemeToggle;
