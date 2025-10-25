import type { Metadata } from "next";
import "../styles/globals.css";

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
      <body className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
