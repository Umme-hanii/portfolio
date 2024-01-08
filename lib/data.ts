import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cityexplorer from "@/public/cityexplorer.png";
import tasks from "@/public/tasks.png";
import genius from "@/public/genius.png";

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
    title: "JavaScript Developer",
    location: "Hyderabad, India",
    description:
      "I worked as a javascript developer for 1.5 years on a . I also upskilled to the full stackI worked as a javascript developer for 1.5 years on a . I also upskilled to the full stackI worked as a javascript developer for 1.5 years on a . I also upskilled to the full stackI worked as a javascript developer for 1.5 years on a . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Hyderabad, India",
    description:
      "I'm now a full-stack developer working in a scrum team of 4. My stack includes Angular, React, Node.js, Next.js, TypeScript, Express.js and MongoDB.I worked as a javascript developer for 1.5 years on a . I also upskilled to the full stackI worked as a javascript developer for 1.5 years on a . I also upskilled to the full stackI worked as a javascript developer for 1.5 years on a . I also upskilled to the full stack",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Next Genius",
    description: "This Next.js app is inspired by ChatGpt.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Daisyui"],
    imageUrl: genius,
  },
  {
    title: "City Explorer",
    description: "A website to explore cities around the world.",
    tags: ["Angular", "TypeScript", "Node.js", "Angular Material"],
    imageUrl: cityexplorer,
  },
  {
    title: "Nextjs Suite",
    description:
      "An application having a bunch of dynamic and static components like tasks, drinks etc.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Daisyui"],
    imageUrl: tasks,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Angular Material",
  "SCSS",
  "Express",
  "SQL",
  "RXJS",
  "NgRx",
  "Prisma",
  "Framer Motion",
] as const;
