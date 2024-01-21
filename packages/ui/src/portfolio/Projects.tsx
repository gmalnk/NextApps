"use client";
import React from "react";
import { useSectionInView } from "./Intro";
import SectionHeading from "./SectionHeadding";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { themeState } from "store/atoms/portfolioAtoms";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

const MyProjects: Project[] = [
  {
    title: "Finance App",
    description:
      "Empowering Indian Retail Investors with my finance app, seamlessly blending Next.js and Express backend. Authenticated with NextAuth, it's a trading-view-inspired tool for insightful technical analysis ",
    image: "/trading.png",
    technologies: [
      "NextJS",
      "ExpressJs",
      "Postgresql",
      "Prisma",
      "NextAuth",
      "Tailwind-css",
      "shadcn ui",
    ],
    link: "https://trend-io.vercel.app",
  },
  {
    title: "Netflix Clone",
    description:
      "Highlighting my skills, this Netflix clone demonstrates proficiency in React and Firebase. From responsive design to seamless navigation, it mirrors the user-friendly interface of the original platform",
    image: "/netflix.png",
    technologies: [
      "NextJS",
      "Prisma",
      "Next-Auth",
      "Supabase",
      "server-actions",
    ],
    link: "https://gmalnk-movieflix.vercel.app",
  },
  {
    title: "Tetris Game",
    description:
      "Featuring real-time gameplay, my Tetris game is meticulously built using Next.js, employing React hooks and custom hooks for a dynamic and engaging gaming experience",
    image: "/tetris.png",
    technologies: ["NextJS", "Tailwind", "custom hooks"],
    link: "https://gmalnk-tetris.netlify.app",
  },
  {
    title: "TODO app",
    description:
      "Crafted with Tailwind CSS and Shadow UI, my Todo app boasts a sleek and responsive design. Powered by Prisma and NextAuth,  It seamlessly integrates CRUD operations and server actions for a robust user experience",
    image: "/todo.png",
    technologies: ["NextJS", "Prisma", "Next-Auth", "Supabase", "Tailwind"],
    link: "https://gmalnk-todo.vercel.app/home",
  },
  {
    title: "Snake Game",
    description:
      "Dive into classic gaming fun with this Snake Game App, built using React and Nextjs, featuring intuitive controls for an immersive experience",
    image: "/snakegame.png",
    technologies: ["NextJS", "react-hooks"],
    link: "https://cobra-quest.netlify.app",
  },
];

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.3,
    },
  }),
};

const projectHedding = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};

const projectDescription = {
  initial: { opacity: 0, y: -70 },
  animate: { opacity: 1, y: 0 },
};

const technologies = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const theme = useRecoilValue(themeState);
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-[65rem] scroll-mt-28 text-center sm:mb-40 w-full bg-gray-50 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
    >
      <SectionHeading width={160}>My Projects</SectionHeading>
      <div className=" grid grid-cols-1 sm:grid-cols-2 max-w-[65rem] gap-[8px] w-full mt-8">
        {MyProjects.map((Project, index) => {
          return (
            <motion.div
              className=" max-w-[500px] group"
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Link href={Project.link} target="_blank">
                <motion.div
                  className=" h-[300px] rounded-[8px] relative bg-gray-800"
                  style={{
                    boxShadow:
                      theme === "light"
                        ? "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
                        : "rgba(250, 250, 250, 0.15) 0px 5px 15px 0px",
                  }}
                  whileHover={{ zIndex: 10 }}
                >
                  <Image
                    src={Project.image}
                    alt="Project-Img"
                    priority
                    quality={100}
                    fill
                    className=" absolute left-0 top-0 rounded-[8px] z-10 group-hover:scale-50 group-hover:opacity-0 transition-transform "
                  />

                  <motion.div
                    className=" absolute top-4 left-4 text-white font-bold text-3xl invisible group-hover:visible"
                    initial="initial"
                    animate="animate"
                    variants={projectHedding}
                    transition={{ duration: 0.5 }}
                  >
                    {Project.title}
                  </motion.div>
                  <motion.p
                    className=" absolute top-16 left-4 text-white font-semibold text-lg invisible group-hover:visible mr-8 text-left"
                    initial="initial"
                    animate="animate"
                    variants={projectDescription}
                    transition={{ duration: 0.5 }}
                  >
                    {Project.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-row justify-end max-w-[100%] flex-wrap absolute bottom-2 right-2 invisible group-hover:visible gap-2"
                    initial="initial"
                    animate="animate"
                    variants={technologies}
                    transition={{ duration: 0.5 }}
                  >
                    {Project.technologies.map((technologie, index) => {
                      return (
                        <div
                          className="bg-blue-500 hover:bg-blue-500 hover:cursor-pointer rounded-[8px] text-white px-2 py-[1px]"
                          key={index}
                        >
                          {technologie}
                        </div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
