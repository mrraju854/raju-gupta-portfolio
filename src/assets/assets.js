import {FaCode,FaLaptopCode,FaRocket,FaReact,FaServer,FaGitAlt,FaCloudUploadAlt,FaMobileAlt,FaBookOpen,FaJs,FaTasks,FaCloudSun,FaHtml5,FaCss3Alt,} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Profiler } from "react";

import profileImage from "./profileImage.png";
import aboutImage from "./aboutImage.avif"
import projectImg1 from "./project1.png";
import projectImg2 from "./project2.png";
import projectImg3 from "./project3.png";
import projectImg4 from "./project4.png";
import projectImg5 from "./project5.png";
import projectImg6 from "./project6.png";

export const assets = {
  profileImage, aboutImage
};

export const aboutInfo = [
{
  icon: FaLaptopCode,
  title: 'Frontend Developer',
  description: 'I create responsive web applications using  React and JavaScript.',
  color: 'text-green'
},
{
  icon: FaCode,
  title: 'Problem Solver',
  description: 'I enjoy breaking down complex challenges and building  scalable code.',
  color: 'text-blue'
},
{
  icon: FaRocket,
  title: 'Fast Learner',
  description: 'I quickly adapt to new technologies and continuously improve skills.',
  color: 'text-orange'
}
]


export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive web applications using modern frontend technologies.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    title: "React Ecosystem",
    icon: FaLaptopCode,
    description:
      "Developing scalable React applications using reusable components and modern React concepts.",
    tags: [
      "Components",
      "Props",
      "Hooks",
      "Context API",
      "React Router",
      "State Management",
    ],
  },

  {
    title: "Programming & Problem Solving",
    icon: FaCode,
    description:
      "Strong foundation in JavaScript fundamentals and logical problem solving.",
    tags: [
      "ES6+",
      "DOM",
      "Async/Await",
      "API Integration",
      "Debugging",
      "Problem Solving",
    ],
  },

  {
    title: "Tools & Version Control",
    icon: FaGitAlt,
    description:
      "Using industry-standard tools for development, collaboration, and source code management.",
    tags: [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
      "NPM",
    ],
  },

  {
    title: "Deployment & Hosting",
    icon: FaCloudUploadAlt,
    description:
      "Deploying and managing frontend applications on modern hosting platforms.",
    tags: [
      "Netlify",
      "Vercel",
      "Build Process",
      "Hosting",
      "Performance",
    ],
  },

  {
    title: "Currently Learning",
    icon: FaBookOpen,
    description:
      "Continuously improving skills by learning modern technologies and building projects.",
    tags: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Frontend",
    features: [
      "Responsive product listing and detail pages",
      "Category-based product filtering system",
      "Shopping cart user interface implementation",
      "Mobile-friendly design with Tailwind CSS",
    ],
    image: projectImg1,
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    icons: [FaReact, SiTailwindcss, FaJs],
    demo: "https://shoptechverse.netlify.app/",
    code: "https://github.com/mrraju854/techverse",
  },

  {
    title: "Weather Forecast App",
    features: [
      "Real-time data using OpenWeather API",
      "search functionality with instant results",
      "Displays temperature, humidity and wind",
      "Responsive UI for all devices",
    ],
    image: projectImg3,
    tech: ["React.js", "Tailwind CSS", "API"],
    icons: [FaReact, SiTailwindcss, FaCloudSun],
    demo: "https://raju-weather-app.netlify.app/",
    code: "https://github.com/mrraju854/weather-app-react",
  },

  {
    title: "Admin Employee Dashboard",
    features: [
      "Role-based login and authentication system",
      "Employee performance tracking dashboard",
      "Admin - admin@gmail.com, Password - 123",
      "Empployee - emp1@gmail.com To emp5@gmail.com, Password - 123"
    ],
    image: projectImg2,
    tech: ["React.js", "Tailwind CSS", "Context API"],
    icons: [FaReact, SiTailwindcss, FaTasks],
    demo: "https://taskflow-ems.netlify.app/",
    code: "https://github.com/mrraju854/ems-dashboard",
  },

  {
  title: "Secure PIN Lock UI",
  features: [
    "Secure PIN input interface with clean UI design",
    "Real-time input validation and feedback",
    "Responsive design for all screen sizes",
    "Smooth and interactive user experience",
    ],
    image: projectImg4,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://secure-pin-lock.netlify.app/",
    code: "https://github.com/mrraju854/secure-pin-lock-ui"
  },

  {
    title: "GTA Agency Website",
    features: [
      "Interactive sections with smooth animations",
      "Responsive agency-style landing page",
      "Modern design with engaging user experience",
      "Optimized layout for all screen sizes",
    ],
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://gta-update-raju.netlify.app/",
    code: "https://github.com/mrraju854/gta-agency-landing-page",
  },

  {
    title: "Tic Tac Toe Game",
    features: [
      "Turn-based gameplay with player switching",
      "Automatic winner and draw detection",
      "Reset and new game functionality",
      "Responsive interface using HTML, CSS and JavaScript",
    ],
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaCss3Alt, FaJs],
    demo: "https://tic-tac-toe-raju.netlify.app/",
    code: "https://github.com/mrraju854/tic-tac-toe-game.git",
  },
];

export const workData = [
  {
    role: "Advanced React Projects",
    company: "Personal Development",
    duration: "2026",
    description:
      "Built real-world React.js applications including Employee Management Dashboard, Weather App, and E-Commerce Frontend while focusing on reusable components, state management, and API integration.",
    color: "green",
  },

  {
    role: "Frontend Projects",
    company: "Project Portfolio",
    duration: "2025 - 2026",
    description:
      "Developed responsive websites and web applications such as Hulu Clone, GTA Agency Website, and Tic Tac Toe Game using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
    color: "blue",
  },

  {
    role: "Web Development Journey",
    company: "Self Learning",
    duration: "2025",
    description:
      "Started learning web development with HTML, CSS, and JavaScript fundamentals while building landing pages, UI components, and interactive frontend projects.",
    color: "purple",
  },
];