import "./globals.css";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Spotlight from "@/components/Spotlight";

export const metadata = {
  title: "BRAHIAN DANILO HURTADO MUÑOZ",
  description: "Portafolio de desarrollador"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <ParticlesBackground />
        <Spotlight />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
