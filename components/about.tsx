"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently pursuing a degree in {" "}
        <span className="font-medium">Computer Science</span>, I was interested in web development and
       then started learning more about it. I learnt to code from resources like youtube and other free online resources{" "}
        <span className="font-medium"></span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and creating pretty looking user interfaces. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Tailwind. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position or an Intership to gain experience</span> as a Web
        developer.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy sketching
        , watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
