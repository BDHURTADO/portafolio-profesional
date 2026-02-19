"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Proyectos", id: "projects" },
    { name: "Habilidades", id: "skills" },
    { name: "Contacto", id: "contact" }
  ];

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center border-b border-white/10">
      
      {/* Nombre */}
      <h1 className="text-cyan-400 font-bold text-lg md:text-xl tracking-wide">
        Brahian Danilo Hurtado Muñoz
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => handleClick(l.id)}
            className="hover:text-cyan-400 transition"
          >
            {l.name}
          </button>
        ))}

        {/* Botón tema */}
        {mounted && (
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        )}
      </div>

      {/* Mobile botones */}
      <div className="md:hidden flex items-center gap-4">
        {mounted && (
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full bg-white/10"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        )}

        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menú */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center gap-6 py-8 md:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className="text-lg hover:text-cyan-400 transition"
            >
              {l.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
