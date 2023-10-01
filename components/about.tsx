"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
        After graduating with a degree in{" "}
        <span className="font-medium">
          Electronics and Communication Engineering
        </span>
        , I decided to combine my technical knowledge with my passion for
        programming. I enrolled in a coding boot-camp and dedicated myself to
        learning <span className="font-medium">full-stack web development</span>
        . Throughout the course, I was drawn to the{" "}
        <span className="italic">problem-solving</span> aspect of programming.{" "}
        There's nothing more satisfying than finally figuring out a{" "}
        <span className="font-medium">
          solution to a tough programming challenge
        </span>
        . My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also proficient in using{" "}
        <span className="font-medium">TypeScript and Express.js</span>. However,
        I am always eager to expand{" "}
        <span className="font-medium">my skills</span> and stay up-to-date with{" "}
        <span className="underline">new technologies</span> in the rapidly
        evolving field of{" "}
        <span className="font-medium">software development</span>. Currently, I
        am actively seeking a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="font-medium">software developer </span>where I can
        utilize my skills and continue learning while contributing to{" "}
        <span className="font-medium">Dynamic projects</span>.
      </p>
      <p>
        <span className="italic">While coding is my main focus</span>, I believe
        that maintaining a balance between{" "}
        <span className="font-medium">work and relaxation</span> is crucial for
        personal growth. In my free time, you can find me{" "}
        <span className="font-medium">
          playing video games or watching web series
        </span>
        . I also enjoy <span className="font-medium">learning new things</span>.
        Being an active individual,{" "}
        <span className="font-medium">working out</span> is not just a hobby but
        also an escape from the <span className="font-medium">world</span> for
        me. My dedication towards leading a{" "}
        <span className="font-medium">healthy lifestyle</span> reflects in my{" "}
        <span className="font-medium">work ethic</span> as well.
      </p>
    </motion.section>
  );
}
