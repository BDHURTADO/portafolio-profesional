"use client";

import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const phone = "573235901888";
  const email = "brahianhurtado800@gmail.com";
  const github = "https://github.com/BDHURTADO";
  const linkedin = "https://www.linkedin.com/in/bdhurtado13";

  return (
    <section id="contact" className="py-28">
      <ScrollReveal>
        <h2 className="text-4xl font-bold mb-12 text-cyan-400 text-center">
          Contacto
        </h2>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          className="flex items-center gap-3 px-7 py-4 bg-green-600/90 rounded-xl hover:scale-105 hover:bg-green-500 transition"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </a>

        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 px-7 py-4 bg-red-600/90 rounded-xl hover:scale-105 hover:bg-red-500 transition"
        >
          <FaEnvelope size={20} />
          Gmail
        </a>

        <a
          href={github}
          target="_blank"
          className="flex items-center gap-3 px-7 py-4 bg-gray-800 rounded-xl hover:scale-105 hover:bg-gray-700 transition"
        >
          <FaGithub size={20} />
          GitHub
        </a>

        <a
          href={linkedin}
          target="_blank"
          className="flex items-center gap-3 px-7 py-4 bg-blue-600 rounded-xl hover:scale-105 hover:bg-blue-500 transition"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
