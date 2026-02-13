"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 text-center">
      <AnimatedSection>
        <h3 className="text-3xl font-bold mb-8">
          Estudios
        </h3>

        <button
          onClick={() => setOpen(!open)}
          className="px-6 py-3 border border-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
        >
          {open ? "Ocultar estudios" : "Ver estudios"}
        </button>

        {open && (
          <div className="mt-10 max-w-2xl mx-auto bg-[var(--card)] p-6 rounded-xl border border-[var(--border)]">
            <h4 className="text-xl font-semibold mb-2">
              ingenieria en software
            </h4>
            <p className="text-gray-400">
              fundacion universitaria maria cano - 2023 - actualidad
            </p>

            <hr className="my-4 border-[var(--border)]" />

            <h4 className="text-xl font-semibold mb-2">
              tecnico en sistemas
            </h4>
            <p className="text-gray-400">
              Sena - 2021-2022
            </p>
          </div>
        )}
      </AnimatedSection>
    </section>
  );
}
