import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="px-6 md:px-20">
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <Timeline />
      <Education />
      <Contact />
      
    </main>
  );
}
