"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "./Header";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  timeOfLastClickState,
  currentActiveSectionState,
} from "store/atoms/portfolioAtoms";
import { Separator } from "../../components/ui/separator";

export type SectionName = (typeof links)[number]["name"];

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const timeOfLastClick = useRecoilValue(timeOfLastClickState);
  const setActiveSection = useSetRecoilState(currentActiveSectionState);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView]);

  return {
    ref,
  };
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className=" flex sm:flex-col justify-center items-center gap-16 mt-[150px] mb-28 max-w-[1200px] text-center sm:mb-40 sm:mt-36 scroll-mt-[100rem] bg-gray-50 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
    >
      <div className="flex flex-col justify-center items-center xl:flex-row gap-10">
        <div className="flex items-center justify-center w-[900] h-[900] basis-1/3">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Profile-nobg.png"
              alt="Ricardo portrait"
              width={300}
              height={300}
              quality="95"
              priority={true}
              className=" h-[200] w-[200] rounded-xl object-cover border-[2] border-white shadow-xl bg-gray-800"
            />
          </motion.div>
        </div>

        <div className="flex flex-col relative flex-shrink justify-center items-center xl:justify-start xl:items-start">
          <motion.div
            className="flex flex-col justify-center items-center xl:justify-start xl:items-start "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className=" text-center xl:text-left font-semibold text-[60px]">
              Hello, I'm <span>Goram Anil Nayak</span>.
            </div>
            <div className="text-center xl:text-left font-semibold text-[20px] mt-8">
              Full-stack developer specializing in the MERN stack.
            </div>
            <div className="text-center xl:text-left font-semibold text-[20px] text-wrap mt-4 max-w-[800px]">
              With two years of experience, I bring a blend of technical
              expertise and a passion for crafting seamless web applications.
            </div>
          </motion.div>

          <motion.div
            className="px-4 text-lg font-medium xl:absolute xl:right-2 xl:bottom-[-100px] w-fit mt-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/Anil_CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 2,
        }}
      >
        <Separator
          orientation="horizontal"
          className=" hidden sm:w-[2px] sm:block sm:h-32 sm:bg-gray-500"
        />
      </motion.div>
    </section>
  );
}
