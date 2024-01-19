"use client";

import React from "react";
import SectionHeading from "./SectionHeadding";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "./Intro";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { useRecoilValue } from "recoil";
import { themeState } from "store/atoms/portfolioAtoms";

const colors = {
  slate50: "#f8fafc",
  slate100: "#f1f5f9",
  slate200: "#e2e8f0",
  slate300: "#cbd5e1",
  slate400: "#94a3b8",
  slate500: "#64748b",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1e293b",
  slate900: "#0f172a",
  slate950: "#020617",
};

export const experiencesData = [
  {
    title: "Dual Degree - Mechanical Engg",
    location: "IIT Kharagpur",
    description:
      "In 2022, I successfully completed a dual degree in Mechanical Engineering, encompassing a Bachelor's (B.Tech) and an integrated Master's (M.Tech) program, with an CGPA of 8.3.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2022",
  },
  {
    title: "Operations Research Analyst",
    location: "Laminaar Aviation Infotech",
    description:
      "As an Operations Research Analyst, I tackle real-world crew scheduling Problems by applying mathematical modeling. My responsibilities include transforming these models into executable code and incorporating client requirements into the final product.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "self-projects",
    description:
      "My stack includes React, Next.js, TypeScript, Tailwind, Prisma and Postgresql. I'm open to full-time opportunities as a Full-Stack Developer",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const theme = useRecoilValue(themeState);
  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 bg-gray-50 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
    >
      <SectionHeading width={200}>My experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? colors.slate400 : colors.slate100}
      >
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? colors.slate800 : colors.slate100,
                  boxShadow: "none",
                  border:
                    theme === "light"
                      ? `1px solid ${colors.slate900}`
                      : `1px solid ${colors.slate100}`,
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? `0.4rem solid ${colors.slate900}`
                      : `0.4rem solid ${colors.slate100}`,
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? colors.slate300 : colors.slate900,
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize dark:text-gray-900 text-white">
                  {item.title}
                </h3>
                <p className="font-normal !mt-0 dark:text-gray-900/85 text-white/85">
                  {item.location}
                </p>
                <p className="!mt-1 !font-normal dark:text-gray-900/75 text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
