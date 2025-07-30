"use client";

import cn from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      style={
        isDark
          ? { backgroundImage: "url('/moon.png')" }
          : { backgroundColor: "white" }
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "z-10 sm:mt-10 mt-4 mr-4 sm:mr-10 relative h-20 w-20 rounded-full",
        isDark
          ? "hover:shadow-[0_0_10px_10px_rgba(255,255,255,0.3)]"
          : "sun-glow shadow-[inset_0_0_15px_rgba(255,255,0,1)] hover:shadow-[0_0_80px_10px_rgba(255,255,255,0.1)]"
      )}
    >
      {isDark ? (
        <div className="absolute top-0 -translate-y-[10%] shadow-[0_0_10px_10px_rgba(0,0,0,1)] bg-black rounded-full h-16 z-10 w-16 translate-x-[40%]" />
      ) : (
        <div />
      )}
    </button>
  );
}
