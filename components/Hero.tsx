"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 relative">
      <AnimatedSection>
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {" "}
            <span className="text-[var(--primary)]">
              BRAHIAN DANILO HURTADO MUÑOZ
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl text-[var(--secondary)] mb-6">
            <Typewriter
              words={[
                "Frontend Developer",
                "desarrollador ",
                "UI/UX Enthusiast"
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          <p className="text-gray-400 mb-8">
            soy un desarrollador web y diseñador de interfaces con experiencia en diseño y desarrollo web.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--primary)] rounded-lg transition-all duration-300 hover:bg-[var(--secondary)] hover:shadow-[0_0_25px_var(--primary)]"
            >
              Ver proyectos
            </a>

            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 border border-[var(--primary)] rounded-lg transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:shadow-[0_0_20px_var(--primary)]"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* FOTO */}
      <AnimatedSection>
        <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--primary)] shadow-[0_0_40px_var(--primary)]">
          <Image
            src="/profile.jpg"
            alt="Tu foto"
            fill
            className="object-cover"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
