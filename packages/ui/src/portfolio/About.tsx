"use client";

import React from "react";
import SectionHeading from "./SectionHeadding";
import { motion } from "framer-motion";
import { useSectionInView } from "./Intro";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center mt-28 sm:mt-0 leading-8 sm:mb-40 scroll-mt-28 text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading width={140}>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className=" font-bold">Full-stack web developer</span> with
        a deep passion for problem-solving in the dynamic world of programming.
        My core stack includes{" "}
        <span className=" font-bold">React, Next.js, Node.js,</span> and{" "}
        <span className=" font-bold">Postgresql</span>, complemented by
        proficiency in <span className=" font-bold"> TypeScript</span> and{" "}
        <span className=" font-bold">Prisma</span>. Currently seeking a{" "}
        <span className=" font-bold">full-time role</span>,{" "}
        <span className=" italic">
          I bring a project-based learning approach that not only hones
          technical skills but also fosters a practical understanding of
          real-world challenges.
        </span>
      </p>

      <p>
        <span className=" italic">When I'm not coding</span>, I find balance in
        playing <span className=" font-bold"> Chess</span>, indulging in
        <span className=" font-bold"> Anime</span>, staying informed through{" "}
        <span className=" font-bold"> News articles</span>, and immersing myself
        in the world of <span className=" font-bold"> Books</span>.
      </p>
      <p className="mt-8">
        Eager to contribute my expertise to{" "}
        <span className=" font-bold">Innovative projects</span>, I embrace
        continuous learning and the evolving tech landscape.
      </p>
    </motion.section>
  );
}
