"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 2000,
        style: {
          background: "#1f2937", // Tailwind gray-800
          color: "#f3f4f6", // Tailwind gray-100
          fontSize: "0.9rem",
          borderRadius: "0.75rem",
          padding: "0.75rem 1rem",
          border: "1px solid #374151", // gray-700 border
        },
        success: {
          iconTheme: {
            primary: "#10b981", // emerald-500
            secondary: "#1f2937", // dark background
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444", // red-500
            secondary: "#1f2937",
          },
        },
      }}
    />
  );
}
