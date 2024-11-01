"use client"
import { ImgType, TechStackCardsPropsType } from "@/app/types/types";

export const imgDetailsArr: ImgType = [
  {
    description: "HTML5",
    img: "/skillsImg/html.svg",
  },
  {
    description: "CSS3",
    img: "/skillsImg/css.svg",
  },
  {
    description: "Javascript",
    img: "/skillsImg/js.svg",
  },
  {
    description: "React",
    img: "/skillsImg/react.svg",
  },
  {
    description: "Redux",
    img: "/skillsImg/redux.svg",
  },
  {
    description: "Gatsby",
    img: "/skillsImg/gatsby.svg",
  },
  {
    description: "Next.js",
    img: "/skillsImg/nextjs.svg",
    bgColor: "bg-white",
  },
  {
    description: "Tailwind CSS",
    img: "/skillsImg/tailwind-css.svg",
  },
  {
    description: "Three.js",
    img: "/skillsImg/threejs.svg",
    bgColor: "bg-white",
  },
  {
    description: "Material UI",
    img: "/skillsImg/material-ui.svg",
  },
  {
    description: "Node.js",
    img: "/skillsImg/node-js.svg",
  },
  {
    description: "Express.js",
    img: "/skillsImg/express.svg",
    bgColor: "bg-white",
  },
  {
    description: "MongoDB",
    img: "/skillsImg/mongodb.svg",
  },
  {
    description: "Mongoose",
    img: "/skillsImg/mongoose.svg",
  },
  {
    description: "Mongo Compass",
    img: "/skillsImg/mongo-compass.svg",
  },
  {
    description: "postgreSQL",
    img: "/skillsImg/postgreSQL.svg",
  },
  {
    description: "Socket.IO",
    img: "/skillsImg/socket.io.svg",
    bgColor: "bg-white",
  },
  {
    description: "GraphQL",
    img: "/skillsImg/graphql.svg",
  },
  {
    description: "Typescript",
    img: "/skillsImg/typescript.svg",
  },
  {
    description: "Rest API",
    img: "/skillsImg/rest-api.svg",
    bgColor: "bg-white",
  },
  {
    description: "Python",
    img: "/skillsImg/python.svg",
  },
  {
    description: "Selenium",
    img: "/skillsImg/selenium.svg",
  },
  {
    description: "Keycloak",
    img: "/skillsImg/keycloak.svg",
  },
  {
    description: "Git",
    img: "/skillsImg/git.svg",
  },
  {
    description: "Docker",
    img: "/skillsImg/docker.svg",
  },
  {
    description: "Postman",
    img: "/skillsImg/postman.svg",
  },
];

export const image3dType: ImgType = [
  {
    description: "HTML5",
    img: "/tech/html.png",
  },
  {
    description: "CSS3",
    img: "/tech/css.png",
  },
  {
    description: "Javascript",
    img: "/tech/javascript.png",
  },
  {
    description: "React",
    img: "/tech/reactjs.png",
  },
  {
    description: "Redux",
    img: "/tech/redux.png",
  },
  {
    description: "Tailwind CSS",
    img: "/tech/tailwind.png",
  },
  {
    description: "Node.js",
    img: "/tech/nodejs.png",
  },
  {
    description: "MongoDB",
    img: "/tech/mongodb.png",
  },
  {
    description: "Typescript",
    img: "/tech/typescript.png",
  },
  {
    description: "Docker",
    img: "/tech/docker.png",
  },
];

export const frontEndStackProps: TechStackCardsPropsType = {
  title: "Frontend Development",
  skills: "Next.js, React.js, Gatsby, Redux with Tailwind CSS",
  list: [
    "Developed dynamic and responsive web applications using Next.js and React.js",
    "Implemented state management with Redux to optimize UI performance.",
    "Styled components and layouts efficiently using Tailwind CSS",
    "Collaborated with backend teams to integrate APIs and ensure seamless frontend-backend interactions.",
    "Focused on frontend architecture, code modularity, and enhancing user experience.",
  ],
  xStart: -50,
  xEnd: 0,
};

export const backEndStackProps: TechStackCardsPropsType = {
  title: "Backend Development",
  skills:
    "Node.js, Express.js, MongoDB, PostgreSQL, REST API Development, Authentication Middleware",
  list: [
    "Developed RESTful APIs with Node.js and Express.js for efficient frontend-backend communication.",
    "Designed database schemas in MongoDB and PostgreSQL, ensuring data integrity and scalability.",
    "Implemented authentication with JWT for enhanced application security.",
    "Collaborated with frontend teams to ensure seamless API integration and data flow.",
    "Focused on MVC architecture, modular code, and scalability.",
  ],
  state: true,
  xStart: 50,
  xEnd: 0,
};

export const dbStackProps: TechStackCardsPropsType = {
  title: "Database Management",
  skills: "MongoDB, PostgreSQL, MySQL, Redis, Firebase",
  list: [
    "Designed and managed databases using MongoDB and PostgreSQL for data integrity and performance.",
    "Implemented data models and relationships to support application requirements.",
    "Utilized Redis for caching to enhance data retrieval speeds.",
    "Managed real-time databases with Firebase for efficient data syncing.",
    "Conducted performance tuning and optimization for database queries.",
  ],
  xStart: -50,
  xEnd: 0,
};

export const authStackProps: TechStackCardsPropsType = {
  title: "Authentication & Security",
  skills: "JWT, OAuth, Passport.js, bcrypt, Keycloak",
  list: [
    "Implemented secure user authentication using JWT and OAuth protocols.",
    "Utilized Passport.js for flexible authentication strategies.",
    "Employed bcrypt for password hashing and encryption to enhance security.",
    "Configured Helmet to secure Express apps by setting various HTTP headers.",
    "Conducted security audits and vulnerability assessments to maintain application integrity.",
  ],
  state: true,
  xStart: 50,
  xEnd: 0,
};
