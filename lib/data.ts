import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "DAILY JOURNAL WEB APP",
    description:
      "Developed and executed a cutting-edge daily journal web application utilizing the MERN stack.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "To-Do-List",
    description:
      "Proficiently developed a robust and fully functional To-Do List Web-application utilizing Node.js, Express.js, and MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Simon Memory Game",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML","CSS", "Javascript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "C/C++",
  "Bootstrap",
  "APIs",
  "Framer Motion",
  "DSA",
  "Operating Systems",
  "DBMS",
] as const;
