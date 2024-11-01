import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import workProgress from "@/public/workProgress.png";
import MoneyWay from "@/public/MoneyWay.png";
import recyclopedia from "@/public/recyclopedia.png";

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
    title: "Champion Air Cargo | IT Assistant & Cargo Agent",
    location: "Miami, FL",
    description:
      " Designed and implemented a Python application to automate the creation of Proof of Delivery (POD) documents, reducing manual workload by 1.5 hours daily and cutting errors by 50%. Managed B2B communication, providing daily updates on fares, ETA, transport options, and shipment logistics. Regularly updated the CRM database through quarterly reviews and enhanced a Salesforce app by building objects and adding fields to meet company needs.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Associate of Arts| Miami-Dade College",
    location: "Miami, FL",
    description:
      "I graduated after 2 years of studying, developing foundational skills in programming and computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Bachelors of Science in Computer Science | Florida International University ",
    location: "Miami, FL",
    description:
      "Currently persuing my bachelor degree in computer science at FIU",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Money Way",
    description:
      "I led a team of three developers at Shellhacks 2024 to create a website that enhances financial literacy, offering resources and tools to help users understand financial concepts and make informed decisions.",
    tags: ["Java", "Postman", "MYSQL", "Springboot", "OpenAI API", "React"],
    imageUrl: MoneyWay,
  },
  {
    title: "Job Application Organizer",
    description:
      "I developed a website that helps users track their job applications and simplifies the application process.",
    tags: ["Java", "Springboot", "RESTful API", "JWT", "SpringbootSecurity", "Angular"],
    imageUrl: workProgress,
  },
  {
    title: "Dream In Green Recyclopedi Website",
    description:
      "I am part of a team of 10 students collaborating to update and enhance the Dream In Green Recyclopedia website.",
    tags: ["React", "next.js", "Tailwinds"],
    imageUrl: recyclopedia,
  },
] as const;

export const skillsData = [
  "Java",
  "Springboot",
  "Python",
  "C++",
  "C",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "TailWinds",
  "Git",
  "Apex",
  "Pytorch",
  "Scikit-Learn",
  "Tensor-Flow",
  "Keras",
  "Numpy",
  "Pandas",
  "R",
  "MySQL",
  "MongoDB",
  "SQL",
  "Junit",
  "Maven",
  "Postman",
  
  
] as const;