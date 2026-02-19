"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  image: string;
  description: string;
  tech: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Buscador de Clima",
    image: "/clima.png",
    description:
      "Aplicación web que consulta el clima mundial usando OpenWeather API.",
    tech: "Next.js, Tailwind, Axios",
    url: "https://tu-proyecto.com"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold mb-12 text-cyan-400 text-center">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-3 gap-10 perspective-[1200px]">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(p)}
            className="cursor-pointer bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-xl border border-cyan-500 max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {selected.title}
              </h3>

              <p className="mb-4 text-gray-300">
                {selected.description}
              </p>

              <p className="mb-6 text-gray-400">
                Tecnologías: {selected.tech}
              </p>

              <a
                href={selected.url}
                target="_blank"
                className="bg-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-600"
              >
                Ver proyecto
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
