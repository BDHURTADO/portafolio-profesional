"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-cyan-400 text-2xl font-bold tracking-widest"
      > 
        BRAHIAN DANILO HURTADO MUÑOZ
      </motion.div>
    </div>
  );
}
