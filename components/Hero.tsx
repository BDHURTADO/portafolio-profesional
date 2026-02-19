"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hola Brahian hurtado, vimos tu portafolio y tu hoja de vida y nos gustaría contratar tus servicios."
  );

  const whatsappLink = `https://wa.me/573235901888?text=${whatsappMessage}`;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        <Image
          src="/perfil.jpg"
          alt="perfil"
          width={180}
          height={180}
          className="rounded-full border-4 border-cyan-400 shadow-xl"
        />
      </motion.div>

      <h1 className="text-4xl md:text-5xl font-bold mt-6">
        Brahian Danilo Hurtado Muñoz
      </h1>

      <p className="text-gray-400 mt-3 max-w-xl">
        Desarrollador de software junior.
      </p>

      {/* BOTONES */}
      <div className="flex flex-wrap gap-6 mt-8 justify-center">
       

        <a
          href="/cv.pdf"
          download
          className="px-8 py-3 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
        >
          Descargar CV
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          className="px-8 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition shadow-lg"
        >
          Contrátame
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            >
              <Image
                src="/perfil.jpg"
                alt="perfil"
                width={420}
                height={420}
                className="rounded-2xl border-4 border-cyan-400"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
