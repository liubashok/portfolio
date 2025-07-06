"use client";

import { useEffect, useState } from "react";
import { Star } from "./Star";
import { StarData, generateStars } from "./generateStars";

export const StarField = () => {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    // первая генерация при монтировании
    const generate = () => setStars(generateStars(1000));
    generate();
    // регенерация при изменении размера окна
    window.addEventListener("resize", generate);

    // очистка при размонтировании
    return () => {
      window.removeEventListener("resize", generate);
    };
  }, []);
  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none ">
      {stars.map((star, i) => (
        <Star
          key={i}
          x={star.x}
          y={star.y}
          size={star.size}
          twinkle={star.twinkle}
        />
      ))}
    </div>
  );
};
