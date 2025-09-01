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
} from "components/icons";
import {Clerk, Convex} from "lib/constants/projectList";
import {FaCss3, FaHtml5, FaJava} from "react-icons/fa";
import { SiEthers, SiExpress, SiGo, SiNestjs, SiSolana, SiSolidity, SiSpringboot, SiWeb3Dotjs } from "react-icons/si";

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
  // Backend & Infra
  {
    title: "Java",
    icon: FaJava,
    animationDelay: "0.2",
  },
  {
    title: "Spring Boot",
    icon: SiSpringboot,
    animationDelay: "0.4",
  },
  {
    title: "Node.js",
    icon: FaNodeJs,
    animationDelay: "0.6",
  },
  {
    title: "Golang",
    icon: SiGo,
    animationDelay: "0.8",
  },
  {
    title: "Express.js",
    icon: SiExpress,
    animationDelay: "1.0",
  },
  // {
  //   title: "Nest.js",
  //   icon: SiNestjs,
  //   animationDelay: "1.2",
  // },
  {
    title: "MongoDB",
    icon: TbBrandMongodb,
    animationDelay: "1.4",
  },
  // {
  //   title: "Firebase",
  //   icon: SiFirebase,
  //   animationDelay: "1.6",
  // },
  {
    title: "Docker",
    icon: SiDocker,
    animationDelay: "1.8",
  },
  // {
  //   title: "AWS",
  //   icon: FaAws,
  //   animationDelay: "2.0",
  // },
  // {
  //   title: "System Design",
  //   icon: MdArchitecture,
  //   animationDelay: "2.2",
  // },

  // Blockchain / Web3
  // {
  //   title: "Solidity",
  //   icon: SiSolidity,
  //   animationDelay: "2.4",
  // },
  {
    title: "Web3.js",
    icon: SiWeb3Dotjs,
    animationDelay: "2.6",
  },
  {
    title: "Ethers.js",
    icon: SiEthers,
    animationDelay: "2.8",
  },
  {
    title: "Solana",
    icon: SiSolana,
    animationDelay: "3.0",
  },

  // Frontend & UI
  {
    title: "React.js",
    icon: FaReact,
    animationDelay: "3.2",
  },
  {
    title: "TypeScript",
    icon: TbBrandTypescript,
    animationDelay: "3.4",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    animationDelay: "3.6",
  },
  {
    title: "HTML",
    icon: FaHtml5,
    animationDelay: "3.8",
  },
  {
    title: "CSS",
    icon: FaCss3,
    animationDelay: "4.0",
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
