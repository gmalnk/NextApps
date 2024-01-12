import Intro from "@repo/ui/src/portfolio/Intro";
import About from "@repo/ui/src/portfolio/About";
import Skills from "@repo/ui/src/portfolio/Skills";
import Experience from "@repo/ui/src/portfolio/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 mt-36">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      {/* <Contact /> */}
    </main>
  );
}
