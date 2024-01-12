"use client";

import React from "react";
import SectionHeading from "./SectionHeadding";
import { useSectionInView } from "./Intro";
import { motion } from "framer-motion";

export const skillsData = {
  HTML: "80%",
  CSS: "65%",
  JavaScript: "85%",
  TypeScript: "80%",
  React: "75%",
  "Next.js": "70%",
  "Node.js": "85%",
  Git: "80%",
  Tailwind: "60%",
  Prisma: "80%",
  MongoDB: "70%",
  Recoil: "85%",
  GraphQL: "60%",
  Apollo: "70%",
  Express: "70%",
  PostgreSQL: "85%",
  Python: "85%",
  FastAPI: "70%",
  "Framer Motion": "50%",
} as const;

const fadeInAnimationVariants = {
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

const growBars = {
  initial: {
    width: 0,
    opacity: 0.8,
  },
  animate: (index: number) => ({
    opacity: 1,
    width: "80%",
    transition: {
      delay: 0.2 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem]  scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading width={100}>My skills</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg text-gray-800">
        {Object.keys(skillsData).map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 h-12 w-full"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex gap-2 justify-between items-center">
              <div>{skill}</div>
              <div className="h-2 w-56 bg-slate-200">
                <motion.div
                  className="h-full bg-black"
                  initial={{ width: 0, opacity: 0.8 }}
                  transition={{ delay: 0.1 * index, duration: 3 }}
                  whileInView={{ width: skillsData[skill], opacity: 1 }}
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
