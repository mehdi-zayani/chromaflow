"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ColorCard from "./ColorCard";

function randomColor(): string {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, "0")}`;
}

export default function PaletteGenerator() {
  const [colors, setColors] = useState<string[]>(Array.from({ length: 5 }, randomColor));

  const handleGenerate = () => {
    setColors(Array.from({ length: 5 }, randomColor));
  };

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-white-400 mb-6">Palette Generator</h2>
      <button
        onClick={handleGenerate}
        className="px-6 py-2 mb-8 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors"
      >
        Generate
      </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {colors.map((color, i) => (
          <ColorCard key={i} color={color} onClick={() => handleCopy(color)} />
        ))}
      </div>
    </motion.div>
  );
}
