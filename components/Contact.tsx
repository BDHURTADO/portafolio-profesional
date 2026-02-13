"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-cyan-400"
      >
        Contacto
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-8">

        {/* Gmail */}
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=brahianhurtado800@gmail.com"
          target="_blank"
          whileHover={{ scale: 1.08 }}
          className="bg-gray-900 border border-gray-800 hover:border-cyan-500 p-8 rounded-xl flex flex-col items-center gap-4 transition"
        >
          <Mail size={40} className="text-cyan-400" />
          <span className="font-semibold">Gmail</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/5732359018888"
          target="_blank"
          whileHover={{ scale: 1.08 }}
          className="bg-gray-900 border border-gray-800 hover:border-cyan-500 p-8 rounded-xl flex flex-col items-center gap-4 transition"
        >
          <MessageCircle size={40} className="text-cyan-400" />
          <span className="font-semibold">WhatsApp</span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/TU_bdhurtado"
          target="_blank"
          whileHover={{ scale: 1.08 }}
          className="bg-gray-900 border border-gray-800 hover:border-cyan-500 p-8 rounded-xl flex flex-col items-center gap-4 transition"
        >
          <Github size={40} className="text-cyan-400" />
          <span className="font-semibold">GitHub</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="www.linkedin.com/in/bdhurtado13"
          target="_blank"
          whileHover={{ scale: 1.08 }}
          className="bg-gray-900 border border-gray-800 hover:border-cyan-500 p-8 rounded-xl flex flex-col items-center gap-4 transition"
        >
          <Linkedin size={40} className="text-cyan-400" />
          <span className="font-semibold">LinkedIn</span>
        </motion.a>

      </div>
    </section>
  );
}
