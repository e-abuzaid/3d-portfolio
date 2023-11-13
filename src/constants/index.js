import { meta, shopify, tesla } from "../assets/images";
import {
  alama,
  car,
  contact,
  covido,
  css,
  custex,
  estate,
  express,
  gifty,
  git,
  github,
  html,
  image,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  prompto,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  whomi,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Custex",
    icon: custex,
    iconBg: "#accbe1",
    date: "November 2022 - February 2023",
    points: [
      "Worked as a part of a flexible team of frontend and backend engineers and had the following responsibilities:",
      "Implementing and constantly improving features for the SaaS web application working in a CI/CD pipeline.",
      "Communicating constantly and effectively with Project Management and UI/UX designers to discuss possible UX solutions and tradeoffs",
      "Exploring and implementing solutions for optimizing performance and SEO for the application.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Freelance",
    icon: "",
    iconBg: "#fbc3bc",
    date: "August 2021 - Present",
    points: [
      "Worked on the design, development and delivery of multiple optimized, responsive solutions for clients from around the world.",
      "Check my portfolio section for a list of projects that I have worked on.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/e-abuzaid",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/eyadabuzaid/",
  },
];

export const projects = [
  {
    iconUrl: alama,
    theme: "btn-back-red",
    name: "Alalamah Alkamla",
    description:
      "A fullstack education platform for interaction between Teacher and Student.",
    link: "https://alalamah-alkamla-eta.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://threads-app-kappa-seven.vercel.app/",
  },
  {
    iconUrl: gifty,
    theme: "btn-back-pink",
    name: "Gifty",
    description:
      "An AI powered CRUD web application that suggests and fetches gifts you can buy for upcoming occasions.",
    link: "https://gifty-web-app.vercel.app/",
  },
  {
    iconUrl: covido,
    theme: "btn-back-green",
    name: "Covido",
    description:
      "A website to get the latest news worldwide and in a a specific country regarding Covid-19.",
    link: "https://covido-app-new.vercel.app/",
  },
  {
    iconUrl: image,
    theme: "btn-back-black",
    name: "Image Generation App",
    description:
      "Built with OpenAI's API, this web application doesn't only allows you to generate images by typing a prompt, but also lets you generate variation of an image you upload to the applications..",
    link: "https://image-generation-app-sage.vercel.app/",
  },
  {
    iconUrl: whomi,
    theme: "btn-back-yellow",
    name: "WhoMI",
    description:
      "A web-based game inspired by Wordle, but football (soccer) themed.",
    link: "https://whomi.online/",
  },
  {
    iconUrl: prompto,
    theme: "btn-back-red",
    name: "Promptopia",
    description:
      "A fullstack AI prompting tools that allows user to explore and share effective prompts to use when utilizing AI platforms.",
    link: "https://promptopia-green-kappa.vercel.app/",
  },
];
