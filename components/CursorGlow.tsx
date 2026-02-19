"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl z-0"
      style={{
        left: pos.x - 144,
        top: pos.y - 144
      }}
    />
  );
}
