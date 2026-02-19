"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains("light"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "transparent" },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" }
        },
        modes: {
          repulse: { distance: 120 }
        }
      },
      particles: {
        number: { value: 70 },
        color: { value: isLight ? "#6366f1" : "#06b6d4" },
        links: {
          enable: true,
          color: isLight ? "#6366f1" : "#06b6d4",
          distance: 140,
          opacity: 0.3
        },
        move: { enable: true, speed: 1.2 },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.5 }
      },
      detectRetina: true
    }),
    [isLight]
  );

  if (!init) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Particles options={options} />
    </div>
  );
}
