


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
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Linux" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Bash" },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },

  {
    title: "Development",
    skills: [
      { name: "React JS" },
      { name: "Node JS" },
      { name: "Express JS" },
      { name: "REST API" },
      { name: "Tailwind CSS" },
    ],
  },

  {
    title: "Infrastructure & Networking",
    skills: [
      { name: "TCP/IP" },
      { name: "DNS" },
      { name: "DHCP" },
      { name: "HTTP/HTTPS" },
      { name: "Troubleshooting" },
      { name: "System Administration" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "VS Code" },
      { name: "Postman" },
      { name: "MongoDB Compass" },
      { name: "Vercel" },
      { name: "CLI" },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: imperativeLogo,
      role: "Software Developer Intern",
      company: "Imperative Business Ventures Limited",
      date: "April 2025 - October 2025",
      desc: "Worked on developing and maintaining web applications while contributing across frontend and backend workflows. Participated in application deployment, hosting, API integration and performance optimization. Gained practical exposure to deployment workflows, version control and production-ready application practices.",
      skills: [
"React JS",
"Node JS",
"Express JS",
"MongoDB",
"REST API",

"Git",
"GitHub",

"Deployment",
"Hosting",

"Linux",
"Docker",

"CI/CD",
"Build & Release",

"Vercel",

"API Testing",

"Troubleshooting",
      ],
    },
  ];
  
  export const education = [
{
  id: 0,
    img: navsahyadriLogo, 
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
      "Developed a full-stack appointment management platform with secure authentication, role-based access and online payments. Designed and deployed frontend and backend services while working with hosting, API integration and production-ready application workflows.",
    image: healthMateImage, // Replace with your image
    tags: ["React JS",
"Node JS",
"Express",
"MongoDB",

"REST API",

"Deployment",
"Hosting",

"Render",
"Vercel",

"Git",],
    github: "https://github.com/Aditya-Jadhav-9471/HealthMate", // Replace
    webapp: "https://healthmate-frontend-ksyq.onrender.com/", // Replace
  },
  {
    id: 1,
    title: "Real-Time Communication Platform",
    description:
      "Built a scalable real-time communication platform supporting direct and group messaging. Implemented authentication, WebSocket communication, deployment workflows and responsive application architecture.",
    image: chatPlatformImage, // Replace with your image
    tags: ["React JS",

"Node JS",

"Express",

"MongoDB",

"Socket.IO",

"REST API",

"Deployment",

"Hosting",

"Git",

"Vercel",],
    github: "https://github.com/Aditya-Jadhav-9471/Communication-Platform", // Replace
    webapp: "", // Add when deployed
  },
];
