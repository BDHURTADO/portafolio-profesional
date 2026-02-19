import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Spotlight from "@/components/Spotlight";
import CursorGlow from "@/components/CursorGlow";
import ScrollBackground from "@/components/ScrollBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Brahian Danilo Hurtado Muñoz",
  description: "Portafolio profesional de Brahian Danilo Hurtado Muñoz"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-black text-white antialiased relative overflow-x-hidden">
        
        {/* Fondos y efectos globales */}
        <ScrollBackground />
        <ParticlesBackground />
        <CursorGlow />
        <Spotlight />

        {/* Navegación */}
        <Navbar />

        {/* Contenido principal */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
