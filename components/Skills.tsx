"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 90 },
  { name: "TailwindCSS", level: 90 },
  { name: "python", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "PHP", level: 60 },
  { name: "MySQL", level: 90 },
  { name: "MongoDB", level: 90 },
  { name: "Firebase", level: 90 },
  { name: "Git", level: 100 },
  { name: "Figma", level: 90 },


];

export default function Skills() {
  return (
    <section className="py-20">
      
      <ScrollReveal>
  <h2 className="text-4xl font-bold mb-12 text-cyan-400">
    Habilidades
  </h2>
</ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-500 transition"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-cyan-400">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-800 h-2 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="bg-cyan-500 h-2 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

