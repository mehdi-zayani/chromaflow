"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-5xl font-bold text-amber-400 mb-3 tracking-wide">
        Welcome to Chromaflow
      </h1>
      <p className="text-gray-400 text-sm sm:text-base">
        Generate beautiful color palettes effortlessly.
      </p>
    </motion.div>
  );
}
