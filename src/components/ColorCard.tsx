"use client";

import { motion } from "framer-motion";

export default function ColorCard({ color, onClick }: { color: string; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer rounded-xl shadow-md overflow-hidden border border-gray-800"
      onClick={onClick}
    >
      <div className="h-32" style={{ backgroundColor: color }} />
      <div className="p-2 text-center text-sm font-mono text-gray-300">{color}</div>
    </motion.div>
  );
}
