"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Git",
  "Figma",
  "Docker"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-cyan-400 text-center">
          Habilidades
        </h2>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.08, y: -4 }}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400 hover:text-cyan-400 transition cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
