"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type StarProps = {
  x: number;
  y: number;
  size: number;
  twinkle?: boolean;
};

export function Star({ x, y, size, twinkle }: StarProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!twinkle) return;

    const interval = setInterval(() => {
      if (Math.random() < 0.2) {
        setActive(true);
        setTimeout(() => setActive(false), 400);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [twinkle]);

  if (!mounted) return null;

  const mode = resolvedTheme === "dark" ? "dark" : "light";
  const pixelSize = size * 1;

  const handleHover = () => {
    setActive(true);
    setTimeout(() => setActive(false), 400);
  };

  return (
    <div
      onPointerEnter={handleHover}
      className={clsx(
        "absolute w-[24px] h-[24px] flex items-center justify-center pointer-events-auto"
      )}
      style={{
        top: `${y - 12}px`,
        left: `${x - 12}px`,
      }}
    >
      <div
        className={clsx(
          "rounded-full opacity-100 transition-all duration-500",
          mode === "dark" ? "bg-white " : "bg-sky-50 ",
          active && clsx("opacity-100 star-glow")
        )}
        style={{
          top: `${y}px`,
          left: `${x}px`,
          width: `${pixelSize}px`,
          height: `${pixelSize}px`,
          transition: "all 0.5s ease",
        }}
      />
    </div>
  );
}
