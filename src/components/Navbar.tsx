"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 text-center border-b border-gray-800 bg-gray-950"
    >
      <h1 className="text-2xl font-semibold text-amber-400 tracking-wide">
        Chromaflow
      </h1>
    </motion.nav>
  );
}
