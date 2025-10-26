"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ColorCard({
  color,
  onClick,
}: {
  color: string;
  onClick?: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    toast.success(`${color} copied to clipboard`, {
      duration: 1500,
      style: {
        background: "#1f2937",
        color: "#fff",
        fontSize: "0.9rem",
      },
    });
    setTimeout(() => setCopied(false), 1200);

    // Appel facultatif du callback parent
    if (onClick) onClick();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer rounded-xl shadow-md overflow-hidden border border-gray-700 transition-colors"
      onClick={handleClick}
    >
      <motion.div
        className="h-32"
        style={{ backgroundColor: color }}
        animate={{ opacity: copied ? 0.7 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-2 text-center text-sm font-mono text-gray-300 relative">
        {copied ? (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-emerald-400 font-semibold"
          >
            Copied!
          </motion.span>
        ) : (
          color
        )}
      </div>
    </motion.div>
  );
}
