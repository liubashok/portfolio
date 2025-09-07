"use client";
import { tsParticles } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles from "@tsparticles/react";
import { useEffect } from "react";
import { loadFull } from "tsparticles";

export function StarField() {
  useEffect(() => {
    (async () => {
      await loadFull(tsParticles);
      await loadStarsPreset(tsParticles);
    })();
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        preset: "stars",
        background: {
          color: { value: "transparent" },
          opacity: 0,
        },
        fullScreen: { enable: false },
        fpsLimit: 30, // Снижен FPS для экономии ресурсов
        detectRetina: false, // Отключено определение retina для упрощения рендеринга
        detectOn: "window",
        pauseOnBlur: true, // Пауза при переключении табов
        pauseOnOutsideViewport: true, // Пауза когда страница не видна
        particles: {
          number: { value: 200 }, // Уменьшено с 1000 до 200 для снижения нагрузки
          size: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
            },
          },
          color: { value: "#fffecf" },
          move: { enable: false },
          opacity: {
            value: 0.9,
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.000001, // Значительно замедлено мерцание для более спокойного эффекта
              opacity: 1,
              color: "#ffffff",
            },
            lines: {
              enable: false,
            },
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: true, mode: "bubble" },
          },
          modes: {
            bubble: {
              distance: 30,
              size: 1.5,
              duration: 0.1,
              opacity: 1,
              speed: 1,
              color: { value: "#ffffff" },
              shadow: {
                enable: true,
                color: { value: "#ffffff" },
                blur: 5,
              },
            },
          },
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}
