"use client";

import { useEffect, useState } from "react";

export default function ScrollBackground() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handle = () => setY(window.scrollY);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-20 transition"
      style={{
        background: `radial-gradient(circle at 50% ${y * 0.3}px, rgba(6,182,212,0.15), transparent 60%)`
      }}
    />
  );
}
