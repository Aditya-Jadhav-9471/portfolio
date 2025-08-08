// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import apiLogo from './assets/tech_logo/api.jpg'
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import cLogo from './assets/tech_logo/c.png'
import mongodbLogo from './assets/tech_logo/mongodb.png';
import sqlLogo from './assets/tech_logo/sql.png'
import socketIoLogo from './assets/tech_logo/socketIo.jpg'
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import imperativeLogo from './assets/company_logo/imperativeLogo.jpg'


// Education Section Logo's
import navsahyadriLogo from './assets/education_logo/navsahyadriLogo.png';
import jaikrantiLogo from "./assets/education_logo/jaikrantiLogo.png"


// Project Section Logo's
import healthMateImage from "../src/assets/work_logo/healthMateImage.png"
import chatPlatformImage from "../src/assets/work_logo/chatPlatformImage.png"


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
        ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      {name: 'Api', logo: apiLogo},
      {name: 'Socket Io', logo: socketIoLogo}
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'Sql', logo: sqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: imperativeLogo,
      role: "MERN Stack Developer -Intern",
      company: "Imperative Business Ventures Limited",
      date: "April 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
{
  id: 0,
    img: navsahyadriLogo, // Replace with your actual image import
    school: "Navsahyadri Group Of Institute, Pune",
    date: "2025 - Present",
    grade: "", // Add if you have it
    desc: "Currently pursuing my Master's degree (MCA) in Computer Applications, gaining expertise in full-stack web development, data structures, algorithms, and modern web technologies. Focused on building scalable applications and improving problem-solving skills.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: jaikrantiLogo, // Replace with your actual image import
    school: "Jaikranti College, Pune",
    date: "2022 - 2025",
    grade: "7.58 CGPA", // Add if you have it
    desc: "Completed my Bachelor's degree (BCA) in Computer Applications, building a solid foundation in programming, database management, and web development. Actively engaged in academic projects that enhanced my technical skills.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  ];
  
export const projects = [
  {
    id: 0,
    title: "Doctor Appointment Booking System",
    description:
      "A web-based platform enabling patients to book appointments and doctors to manage schedules with role-based access control. Features include secure authentication, online payments, and an admin dashboard.",
    image: healthMateImage, // Replace with your image
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Razorpay"],
    github: "https://github.com/Aditya-Jadhav-9471/HealthMate", // Replace
    webapp: "https://healthmate-frontend-ksyq.onrender.com/", // Replace
  },
  {
    id: 1,
    title: "Real-Time Communication Platform",
    description:
      "A full-stack chat application supporting both direct and group messaging, built with real-time capabilities using Socket.IO. Features soft delete, authentication, and responsive UI.",
    image: chatPlatformImage, // Replace with your image
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT"],
    github: "https://github.com/Aditya-Jadhav-9471/Communication-Platform", // Replace
    webapp: "", // Add when deployed
  },
];
