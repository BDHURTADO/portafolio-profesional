"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Proyectos", id: "projects" },
    { name: "Habilidades", id: "skills" },
    { name: "Contacto", id: "contact" }
  ];

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="mx-6 md:mx-20 mt-6 px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 flex justify-between items-center">
          <span className="text-cyan-400 font-bold text-lg md:text-xl">
            BRAHIAN DANILO HURTADO MUÑOZ
          </span>

          <div className="hidden md:flex gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="hover:text-cyan-400 transition"
              >
                {l.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 0 : -6 }}
              className="absolute w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? 0 : 6 }}
              className="absolute w-6 h-0.5 bg-white rounded"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-2xl bg-black/80 flex flex-col items-center justify-center gap-10"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(l.id)}
                className="text-3xl font-semibold hover:text-cyan-400 transition"
              >
                {l.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
