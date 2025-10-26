import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Toaster } from "react-hot-toast";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "Chromaflow",
  description: "A sleek color palette generator by Mehdi Zayani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}   <ToastProvider /></main>
        <Footer />
      </body>
    </html>
  );
}
