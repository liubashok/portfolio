"use client";

import { RefObject, useEffect, useState } from "react";

interface ScrollButtonProps {
  containerRef: RefObject<HTMLDivElement | null>;
  className?: string;
  defaultVisible?: boolean;
}

/**
 * Переиспользуемый компонент кнопки прокрутки вниз
 * Автоматически скрывается при достижении конца контейнера
 */
export function ScrollButton({
  containerRef,
  className = "",
  defaultVisible = true,
}: ScrollButtonProps) {
  const [showButton, setShowButton] = useState(defaultVisible);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isAtEnd = scrollTop + clientHeight >= scrollHeight - 5;
      setShowButton(!isAtEnd);
    }
  };

  const handleScrollClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef]);

  if (!showButton) return null;

  const defaultClasses =
    "text-4xl bg-blue-400 dark:text-rose-200 dark:hover:text-white text-blue-950 hover:text-indigo-800 hover:bg-blue-200 dark:hover:bg-rose-800 dark:bg-rose-950 w-10 h-10 rounded-full border-white border-dotted border text-center transition-opacity ease-in duration-700";

  return (
    <button
      onClick={handleScrollClick}
      className={`${defaultClasses} ${className}`}
      aria-label="Прокрутить вниз"
    >
      ⇣
    </button>
  );
}
