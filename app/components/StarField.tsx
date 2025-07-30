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
        fpsLimit: 60,
        detectRetina: true,
        detectOn: "window",
        particles: {
          number: { value: 1000 },
          size: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              startValue: "random",
              mode: "auto",
              sync: false,
            },
          },
          color: { value: "#fffecf" },
          move: { enable: false },
          opacity: {
            value: 0.6,
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
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
