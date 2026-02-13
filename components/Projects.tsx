"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "Buscador de Clima",
    category: "Web",
    image: "/clima.png",
    description:
      "Aplicación web moderna y responsiva construida con Next.js y Tailwind CSS que permite consultar el clima actual de cualquier ciudad usando la API de OpenWeatherMap.",
    tech: "Next.js, React, TailwindCSS, OpenWeatherMap, Axios",
    github: "https://github.com/BDHURTADO/weather-app-project",
    demo: "https://weather-app-project-two-mocha.vercel.app/"
  },
  {
    title: "Dashboard Admin",
    category: "Web",
    image: "/projects/dashboard.jpg",
    description: "Panel administrativo con gráficas en tiempo real.",
    tech: "React, Firebase",
    github: "https://github.com/tuusuario/dashboard",
    demo: "https://dashboard-demo.vercel.app"
  },
  {
    title: "Landing Startup",
    category: "UI/UX",
    image: "/projects/landing.jpg",
    description: "Landing moderna optimizada para conversión.",
    tech: "Next.js, Tailwind",
    github: "https://github.com/tuusuario/landing",
    demo: "https://landing-demo.vercel.app"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "UI/UX"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Proyectos
        </h2>
      </ScrollReveal>

      {/* Filtros */}
      <div className="flex gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg border transition ${
              filter === cat
                ? "bg-cyan-500 text-black border-cyan-500"
                : "border-gray-700 hover:border-cyan-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 perspective">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.05
              }}
              onClick={() => setSelected(project)}
              className="cursor-pointer bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-xl border border-cyan-500 max-w-lg w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {selected.title}
              </h3>

              <p className="mb-4 text-gray-300">
                {selected.description}
              </p>

              <p className="text-gray-400 mb-6">
                Tecnologías: {selected.tech}
              </p>

              {/* Botones */}
              <div className="flex gap-4 mb-6">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  GitHub
                </a>

                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  Ver Demo
                </a>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="border border-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
