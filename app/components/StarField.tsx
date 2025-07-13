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
        fullScreen: { enable: false },
        detectRetina: true,
        detectOn: "window",
        particles: {
          number: { value: 1000 },
          size: {
            value: { min: 0.1, max: 1.2 },
            animation: {
              enable: true,
              speed: 2,
              startValue: "random",
              mode: "auto",
              sync: false,
            },
          },
          color: { value: "#fffecf" },
          move: { enable: false },
          opacity: { value: 1 },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: true, mode: "bubble" },
          },
          modes: {
            bubble: {
              distance: 50,
              size: 2.5,
              duration: 1,
              opacity: 1,
              speed: 3,
              color: { value: "#ffffff" },
              shadow: {
                enable: true,
                color: { value: "#ffffff" },
                blur: 10,
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
