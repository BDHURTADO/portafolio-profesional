"use client";

import { useState } from "react";

export default function TiltCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [style, setStyle] = useState({});

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setStyle({
      transform: `rotateY(${x * 15}deg) rotateX(${y * -15}deg)`
    });
  }

  function reset() {
    setStyle({ transform: "rotateY(0deg) rotateX(0deg)" });
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200"
      style={style}
    >
      {children}
    </div>
  );
}
