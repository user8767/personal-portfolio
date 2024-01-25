import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import adviceImg from "../public/advice.png";
import youtubeImg from "../public/yt.png";
import tenziesImg from "../public/tenzies.png";
import wordanalyticsImg from "../public/wordanalytics.png";


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
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    liveUrl: "https://word-analytics-three.vercel.app/",
  },
  {
    title: "Advice App",
    description:
      "Uses quote api to get different quotes when clicked on get advice button.",
    tags: ["React", "JavaScript", "API"],
    imageUrl: adviceImg,
    liveUrl: "https://gilded-cat-399c9a.netlify.app/",
  },
  {
    title: "yTube ",
    description:
      "Utube is Youtube clone with search feature , categories and more. Made with Material UI components.",
    tags: ["React", "JavaScript", "Material UI", "RapidAPI"],
    imageUrl: youtubeImg,
    liveUrl: "https://youtube-clone-two-virid.vercel.app/",
  },

  {
    title: "Tenzies Game",
    description:
      "Tenzies is a game where you have to roll the dice until all the dice have the same number.",
    tags: ["React", "JavaScript"],
    imageUrl: tenziesImg,
    liveUrl: "https://tenzies-jet-one.vercel.app/",
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
  "Bulma CSS",
  "Firebase",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
