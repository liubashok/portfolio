"use client";
import { tsParticles } from "@tsparticles/engine";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";

export function StarField() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);

  useEffect(() => {
    // Проверяем системные настройки пользователя
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    setShouldReduceMotion(prefersReducedMotion.matches);

    // Определяем производительность устройства
    const checkDevicePerformance = () => {
      const hardwareConcurrency = navigator.hardwareConcurrency || 2;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const connection = (navigator as any).connection;

      // Считаем устройство слабым если:
      // - менее 4 ядер процессора
      // - менее 4GB RAM
      // - медленное соединение
      const isLowPerfDevice =
        hardwareConcurrency < 4 ||
        deviceMemory < 4 ||
        (connection &&
          connection.effectiveType &&
          ["slow-2g", "2g", "3g"].includes(connection.effectiveType));

      setIsLowPerformanceDevice(isLowPerfDevice);
    };

    checkDevicePerformance();

    const handleChange = (e: MediaQueryListEvent) =>
      setShouldReduceMotion(e.matches);
    prefersReducedMotion.addEventListener("change", handleChange);

    // Загружаем particles только если устройство не слабое
    if (!isLowPerformanceDevice) {
      (async () => {
        await loadFull(tsParticles);
        await loadStarsPreset(tsParticles);
      })();
    }

    return () =>
      prefersReducedMotion.removeEventListener("change", handleChange);
  }, [isLowPerformanceDevice]);

  // Для слабых устройств или при предпочтении минимума анимаций
  if (shouldReduceMotion || isLowPerformanceDevice) {
    return (
      <>
        <style>{`
          @keyframes star-twinkle {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.9; }
          }
          
          .star-field-lite {
            will-change: opacity;
            animation: star-twinkle 4s infinite ease-in-out;
          }
        `}</style>
        <div
          className="star-field-lite"
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 10,
            background: `
              radial-gradient(2px 2px at 20px 30px, #fffecf, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255, 254, 207, 0.6), transparent),
              radial-gradient(1px 1px at 90px 40px, #fffecf, transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(255, 254, 207, 0.4), transparent),
              radial-gradient(2px 2px at 160px 30px, #fffecf, transparent),
              radial-gradient(1px 1px at 200px 60px, rgba(255, 254, 207, 0.8), transparent),
              radial-gradient(2px 2px at 240px 20px, #fffecf, transparent),
              radial-gradient(1px 1px at 280px 90px, rgba(255, 254, 207, 0.5), transparent)
            `,
            backgroundRepeat: "repeat",
            backgroundSize: "300px 120px",
            opacity: 0.7,
          }}
        />
      </>
    );
  }

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
