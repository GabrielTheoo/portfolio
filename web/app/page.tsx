import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Capabilities } from "@/components/sections/capabilities";
import { Resume } from "@/components/sections/resume";
import { Transform } from "@/components/sections/transform";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Capabilities />
      <Resume />
      <Transform />
      <Contact />
    </>
  );
}
