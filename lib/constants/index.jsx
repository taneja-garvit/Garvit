import {
  FaAws,
  FaNodeJs,
  FaReact,
  GiInfo,
  GiSkills,
  GrProjects,
  MdArchitecture,
  MdOutlineContactEmergency,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiGraphql,
  SiTailwindcss,
  TbBrandMongodb,
  TbBrandTypescript,
  VscFeedback,
  BsGithub,
} from "components/icons";
import {Clerk, Convex} from "lib/constants/projectList";
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaExchangeAlt,
  FaJava,
  FaJs,
  FaLock,
  FaProjectDiagram,
  FaRocket,
  FaSearchengin,
  FaServer,
} from "react-icons/fa";
import {SiGo, SiNextdotjs, SiPostman, SiPython, SiVercel} from "react-icons/si";

export const colors = ["#002B5B", "#87e3fa", "#2962d6", "#FFFFFF", "#232323", "#9fb0d2"];

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const TABS = [
  // {
  //   id: "summary",
  //   title: "Who I Am",
  //   icon: <FcPortraitMode className="text-xl" />,
  // },
  {
    id: "skills",
    title: "Skills",
    icon: GiSkills,
  },
  {
    id: "aboutme",
    title: "About Me",
    icon: GiInfo,
  },
  {
    id: "projects",
    title: "Projects",
    icon: GrProjects,
  },
  {
    id: "testimonials",
    title: "Testimonials",
    icon: VscFeedback,
  },
  {
    id: "contactme",
    title: "Contact",
    icon: MdOutlineContactEmergency,
  },
];

export const SKILLS = [
  {
    title: "JavaScript",
    icon: FaJs,
    animationDelay: "0.2",
  },
  {
    title: "Java",
    icon: FaJava,
    animationDelay: "0.4",
  },
  {
    title: "Python",
    icon: SiPython,
    animationDelay: "0.6",
  },
  {
    title: "Go",
    icon: SiGo,
    animationDelay: "0.8",
  },
  {
    title: "TypeScript",
    icon: TbBrandTypescript,
    animationDelay: "1.0",
  },
  {
    title: "Node.js",
    icon: FaNodeJs,
    animationDelay: "1.2",
  },
  {
    title: "FastAPI",
    icon: FaRocket,
    animationDelay: "1.4",
  },
  {
    title: "REST",
    icon: FaExchangeAlt,
    animationDelay: "1.6",
  },
  {
    title: "gRPC",
    icon: FaServer,
    animationDelay: "1.8",
  },
  {
    title: "JWT",
    icon: FaLock,
    animationDelay: "2.0",
  },
  {
    title: "Microservices",
    icon: FaProjectDiagram,
    animationDelay: "2.2",
  },
  {
    title: "Docker",
    icon: SiDocker,
    animationDelay: "2.4",
  },
  {
    title: "ReactJS",
    icon: FaReact,
    animationDelay: "2.6",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    animationDelay: "2.8",
  },
  {
    title: "LLMs",
    icon: FaBrain,
    animationDelay: "3.0",
  },
  {
    title: "RAG",
    icon: FaSearchengin,
    animationDelay: "3.2",
  },
  {
    title: "LangChain",
    icon: FaCode,
    animationDelay: "3.4",
  },
  {
    title: "Vector Databases",
    icon: FaDatabase,
    animationDelay: "3.6",
  },
  {
    title: "Embeddings",
    icon: FaDatabase,
    animationDelay: "3.8",
  },
  {
    title: "Git/GitHub",
    icon: BsGithub,
    animationDelay: "4.0",
  },
  {
    title: "AWS S3",
    icon: FaAws,
    animationDelay: "4.2",
  },
  {
    title: "CloudWatch",
    icon: FaCloud,
    animationDelay: "4.4",
  },
  {
    title: "Postman",
    icon: SiPostman,
    animationDelay: "4.6",
  },
  {
    title: "Vercel",
    icon: SiVercel,
    animationDelay: "4.8",
  },
  {
    title: "Render",
    icon: FaCloud,
    animationDelay: "5.0",
  },
  {
    title: "MongoDB",
    icon: TbBrandMongodb,
    animationDelay: "5.2",
  },
  {
    title: "PostgreSQL",
    icon: FaDatabase,
    animationDelay: "5.4",
  },
];


export const TESTIMONIALS = [
  {
    name: "UNIBIT (UIBT) Coin",
    occupation: "Web3 Company",
    recommendationText:
      "Garvit worked with us on wallet and smart contract development, helping streamline core blockchain features and integrations. His technical depth in Solidity and backend setup made our operations faster and more secure.",
  },
  {
    name: "MarvelX",
    occupation: "Blockchain Client",
    recommendationText:
      "Garvit contributed to our blockchain ecosystem by building wallet infrastructure and token-related features. His knowledge of smart contracts and Web3 integrations proved very valuable for our project.",
  },
  {
    name: "Bruce Mana",
    occupation: "Blockchain Project",
    recommendationText:
      "Garvit assisted us with backend system development and smart contract logic, ensuring reliable and optimized workflows for our platform.",
  },
  {
    name: "Mother Homes",
    occupation: "Accommodation Service (India)",
    recommendationText:
      "Garvit worked on backend and system setup to streamline our service workflows. His ability to quickly understand requirements and deliver effective solutions made a big difference for our operations.",
  },
  {
    name: "Overall Work",
    occupation: "Freelance Projects",
    recommendationText:
      "Across all clients, Garvit has successfully delivered projects worth over $15,000, covering Web3 wallets, smart contracts, and backend development. His reliability and technical skills make him a strong contributor to any project.",
  },
];
