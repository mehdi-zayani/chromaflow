"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full py-6 mt-12 border-t border-gray-800 text-center text-sm text-gray-500"
    >
      © {new Date().getFullYear()} Mehdi Zayani — Chromaflow
    </motion.footer>
  );
}
