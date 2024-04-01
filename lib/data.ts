import ToDoListImg from "@/public/todolist.png";
import ThreadAppImg from "@/public/threadapp.png";
import DailyJournalImg from "@/public/dailyjournal.png";
import TaskNest from "@/public/tasknestapp.png";
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
