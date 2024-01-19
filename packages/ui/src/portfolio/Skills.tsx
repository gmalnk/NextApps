"use client";

import React from "react";
import SectionHeading from "./SectionHeadding";
import { useSectionInView } from "./Intro";
import { motion } from "framer-motion";
import Image from "next/image";

export const skillsData: {
  [key: string]: { experience: string; ImageSrc: string };
} = {
  HTML: { experience: "80%", ImageSrc: "/html.svg" },
  CSS: { experience: "65%", ImageSrc: "/css.svg" },
  JavaScript: { experience: "85%", ImageSrc: "/js.svg" },
  TypeScript: { experience: "70%", ImageSrc: "/ts.svg" },
  React: { experience: "75%", ImageSrc: "/react.svg" },
  "Next.js": { experience: "70%", ImageSrc: "/nextjs.svg" },
  "Node.js": { experience: "85%", ImageSrc: "/nodejs.svg" },
  Git: { experience: "80%", ImageSrc: "/git.svg" },
  Tailwind: { experience: "85%", ImageSrc: "/tailwind.svg" },
  Prisma: { experience: "70%", ImageSrc: "/prisma.svg" },
  MongoDB: { experience: "70%", ImageSrc: "/mongodb.png" },
  Recoil: { experience: "85%", ImageSrc: "/recoil.svg" },
  GraphQL: { experience: "50%", ImageSrc: "/graphql.svg" },
  Docker: { experience: "50%", ImageSrc: "/docker.png" },
  Express: { experience: "70%", ImageSrc: "/expressjs.svg" },
  PostgreSQL: { experience: "85%", ImageSrc: "/postgresql.svg" },
  Python: { experience: "85%", ImageSrc: "/python.svg" },
  FastAPI: { experience: "70%", ImageSrc: "/fastapi.jpg" },
  "Framer Motion": { experience: "50%", ImageSrc: "/framermotion.png" },
} as const;

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
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem]  scroll-mt-28 text-center sm:mb-40 bg-gray-50 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
    >
      <SectionHeading width={130}>My skills</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg text-gray-800">
        {Object.keys(skillsData).map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-1 dark:bg-white/10 dark:text-white/80 h-[60px] w-full"
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex flex-row gap-2 justify-between items-center">
              <Image
                src={skillsData[skill]?.ImageSrc as string}
                priority
                alt={skill}
                width={48}
                height={48}
              />
              <div>{skill}</div>
              <div className="h-2 w-56 bg-slate-200 dark:bg-slate-950 rounded-[6px]">
                <motion.div
                  className="h-full bg-black dark:bg-slate-200 rounded-[8px]"
                  initial={{ width: 0, opacity: 0.8 }}
                  transition={{ delay: 0.1 * index, duration: 3 }}
                  whileInView={{
                    width: skillsData[skill]?.experience,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                ></motion.div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
