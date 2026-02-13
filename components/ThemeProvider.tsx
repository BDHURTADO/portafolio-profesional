"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <button
        onClick={() => setDark(!dark)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 dark:bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
      >
        {dark ? "Modo Claro" : "Modo Oscuro"}
      </button>
      {children}
    </>
  );
}
