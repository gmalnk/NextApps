import React from "react";
import { Separator } from "../../components/ui/separator";
import { motion } from "framer-motion";

type SectionHeadingProps = React.ReactNode;

export default function SectionHeading({
  children,
  width,
}: {
  children: SectionHeadingProps;
  width: number;
}) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
      <h2 className="text-3xl font-medium capitalize mb-2 text-center dark:text-gray-50">
        {children}
      </h2>
      <motion.div
        style={{
          width,
        }}
        className={`h-[2px] mb-8`}
        initial={{ opacity: 0.5, x: -500 }}
        transition={{ delay: 0.2, duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true,
        }}
      >
        <Separator
          orientation="horizontal"
          className="w-full h-full  bg-gray-700 dark:bg-gray-100 rounded-md"
        />
      </motion.div>
    </div>
  );
}
