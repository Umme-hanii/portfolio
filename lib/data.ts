import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import cityexplorer from "@/public/cityexplorer.png";
import tasks from "@/public/tasks.png";
import tourgenius from "@/public/tourgenius.png";

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
    title: "Full Stack JavaScript Developer",
    location: "Hyderabad, India",
    description:
      "I am now a Full Stack Javascript Developer working in an agile team of 4, developing a modern web-based fully event driven diagramming tool and integrating it with the our Core product. I enjoy working on this product as it gives me the ability to implement interesting features and solve complex problems.",
    icon: React.createElement(CgWorkAlt),
    date: "oct/2020 - present",
  },
  {
    title: "Javascript Developer",
    location: "Hyderabad, India",
    description:
      "I was part of an international agile team of 7 working on enhancing the Evolve Classic Enterprise Architecture tool. My role was to implement new features to the product and fix bugs raised by QA and issues reported by our customers. I got to work on core web technologies like HTML, CSS, Vanilla Javascript and ASP.NET MVC and C# on the backend. I started exploring javascript frameworks during this time and i upskilled my javascript knowledge by learning Angular, TypeScript and Node.js and then i moved to the team which was responsible for developing a web-based diagramming tool for our application.",
    icon: React.createElement(FaReact),
    date: "feb/2019 - oct/2020",
  },
  {
    title: "Trainee Software Engineer",
    location: "Hyderabad, India",
    description:
      "During my Internship at Force, I got to work on a Data Modeling tool written in java, This was my first exposure to work environment. I learned valuable skills during this time which has helped me to adapt to my first job easily.",
    icon: React.createElement(FaReact),
    date: "sept/2018 - dec/2018",
  },
] as const;

export const projectsData = [
  {
    title: "Tour Genius",
    description: "A Tour planner inspired by ChatGpt.",
    projectUrl: "https://tour-genius.vercel.app/",
    tags: [
      "Next.js",
      "React",
      "React Query",
      "OpenAI API",
      "Prisma",
      "Tailwind CSS",
      "Daisyui",
    ],
    imageUrl: tourgenius,
  },
  {
    title: "City Explorer",
    description: "A Responsive website to explore cities around the world.",
    tags: ["TypeScript", "Angular", "RxJS", "Node.js", "Angular Material"],
    projectUrl: "https://city-explorer-frontend.vercel.app/",
    imageUrl: cityexplorer,
  },
  // A Responsive website to explore cities around the world. Responsive across all devices, good accessibility, Displaying dynamic images, view static map for the selected city based on latitude and longitude. Node.js server serves cities data."
  // {
  //   title: "Nextjs Suite",
  //   description:
  //     "An application having a bunch of dynamic and static components like tasks, drinks etc.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Daisyui"],
  //   projectUrl: "https://nextjs-apps-kohl.vercel.app/",
  //   imageUrl: tasks,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "C#",
  "React.js",
  "Next.js",
  "React query",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Angular Material",
  "SCSS",
  "Express",
  "SQL",
  "RXJS",
  "NgRx",
  "Prisma",
] as const;
