import ToDoListImg from "@/public/todolist.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ThreadAppImg from "@/public/threadapp.png";
import DailyJournalImg from "@/public/dailyjournal.png";
import TaskNest from "@/public/tasknestapp.png";
import React from "react";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "Indian Institute of Information Technology, Nagpur",
    description:
      "I graduated from IIIT Nagpur in 2024 with a B.Tech in Electronics and Communication Engineering. During my studies, I built a strong foundation in problem-solving, software development, and system design, focusing on real-world applications and innovative solutions.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2020 - May 2024",
  },
  {
    title: "MERN Stack Intern",
    location: "Remote",
    description:
      "I worked as a MERN Stack Intern at Pixel Stitch, where I developed their website from scratch. I focused on building a responsive and scalable platform, ensuring a seamless user experience with modern web technologies.",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - May 2024",
  },
  {
    title: "Associate Software Engineer",
    location: "Noida, UP",
    description:
      "I worked as an Associate Software Developer at CredFlow, where I developed the Company Report feature, allowing users to check reports via GST. I later revamped it, leading to a 40% increase in user retention through improved UX and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Jan 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Task-Nest App (Notion-Clone)",
    description:
      "Inspired by Notion, it offers customizable workspaces and responsive design for seamless Notes organization.",
    tags: [
      "Next.js",
      "Typescript",
      "Convex",
      "Client",
      "Tailwind-CSS",
      "Shadcn-ui",
      "Blocknote",
    ],
    imageUrl: TaskNest,
  },
  {
    title: "DAILY JOURNAL WEB APP",
    description:
      "Capture daily moments: streamlined, reflective, private, accessible, user-friendly journaling web app.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS"],
    imageUrl: DailyJournalImg,
  },
  {
    title: "Threads Web App",
    description:
      "Instagram's Threads Clone: Share text, join conversations, multimedia, interoperable, future-focused social app.",
    tags: ["Next.js", "Typescript", "MongoDB", "Tailwind-CSS", "Client"],
    imageUrl: ThreadAppImg,
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
  "Convex",
  "Client",
] as const;
