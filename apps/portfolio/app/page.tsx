import Intro from "@repo/ui/src/portfolio/Intro";
import About from "@repo/ui/src/portfolio/About";
import Skills from "@repo/ui/src/portfolio/Skills";
import Experience from "@repo/ui/src/portfolio/Experience";
import Projects from "@repo/ui/src/portfolio/Projects";
import Contact from "@repo/ui/src/portfolio/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 mt-36 !scroll-smooth  bg-gray-50 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
