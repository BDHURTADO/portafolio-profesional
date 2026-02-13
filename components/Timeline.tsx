"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  
  {
    title: "Desarrollador Web",
    place: "freelance",
    year: "2024 - Actualidad"
  },
  {
    title: "Tecnico en sistemas",
    place: "clean",
    year: "2024- 2025"
  },
];

export default function Timeline() {
  return (
    <section className="py-24">
      <AnimatedSection>
        <h3 className="text-3xl font-bold text-center mb-16">
          Experiencia
        </h3>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 w-1 h-full bg-[var(--primary)]" />

          {experiences.map((exp, index) => (
            <div key={index} className="ml-12 mb-12 relative">
              <div className="absolute -left-7 top-2 w-4 h-4 bg-[var(--primary)] rounded-full shadow-[0_0_15px_var(--primary)]" />

              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <p className="text-gray-400">{exp.place}</p>
              <span className="text-sm text-[var(--secondary)]">
                {exp.year}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
