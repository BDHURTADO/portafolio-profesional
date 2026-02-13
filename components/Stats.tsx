"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { label: "Proyectos", value: 4 },
  { label: "Empresas que trabaje", value: 1 },
  { label: "Años de experiencia", value: "junior" }
];

export default function Stats() {
  return (
    <section className="py-24 text-center">
      <AnimatedSection>
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index}>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-[var(--primary)]"
              >
                {stat.value}+
              </motion.h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
