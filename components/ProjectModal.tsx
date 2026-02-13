"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({
  open,
  onClose,
  title,
  description
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[var(--background-soft)] p-8 rounded-xl max-w-lg w-full border border-[var(--border)]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 mb-6">{description}</p>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-[var(--primary)] rounded-lg"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
