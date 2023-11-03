import ToDoListImg from "@/public/ToDoList.png";
import ThreadAppImg from "@/public/ThreadApp.png";
import DailyJournalImg from "public/Daily-journal.png";

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
    title: "Threads Web App",
    description:
      "A modern web app clone of Threads built with Next.js, TypeScript, MongoDB, and Tailwind CSS, allowing seamless creation and interaction with dynamic content and discussions.",
    tags: ["Next.js", "Typescript", "MongoDB", "Tailwind CSS"],
    imageUrl: ThreadAppImg,
  },
  {
    title: "To-Do-List",
    description:
      "Proficiently developed a robust and fully functional To-Do List Web-application utilizing Node.js, Express.js, and MongoDB.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    imageUrl: ToDoListImg,
  },
  {
    title: "DAILY JOURNAL WEB APP",
    description:
      "Developed and executed a cutting-edge daily journal web application utilizing the MERN stack.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    imageUrl: DailyJournalImg,
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
