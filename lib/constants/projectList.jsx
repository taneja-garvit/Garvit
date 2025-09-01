import {
  SiOpenai,
  SiTailwindcss,
  FaCss3,
  AiOutlineEdit,
  SiFirebase,
  SiCodemirror,
  FaAws,
  FaReact,
  TbBrandThreejs,
  AiOutlineMail,
  SiFramer,
  SiNextdotjs,
  TbGridDots,
  SiRazorpay,
  TbBrandMongodb,
  FaNodeJs,
  TbBrandTypescript,
  SiMysql
  
} from "src/components/icons";
import { SiEthers, SiExpress, SiGo, SiNestjs, SiSolana,SiSolidity, SiSpringboot, SiWeb3Dotjs } from "react-icons/si";


import convexLogo from "src/assets/convex-logo.svg";
import clerkLogo from "src/assets/clerk.svg";
import {cn} from "lib/utils/cn";
import { SiDocker } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const Convex = ({className = "w-6 h-6"}) => {
  return <img alt="Convex logo" src={convexLogo} className={cn("grayscale", className)} />;
};

export const Clerk = ({className = "w-6 h-6"}) => {
  return <img alt="Clerk logo" src={clerkLogo} className={cn("grayscale", className)} />;
};

export const PROJECTS = [
 {
  title: "Unibit Game",
  description: `A coin-flip betting game integrated with a crypto wallet. Built with MERN stack and Web3 technologies, featuring MetaMask integration and Solidity smart contracts for secure gameplay.`,
  githubURL: "https://github.com/taneja-garvit/unibitcoin", // replace with actual link
  liveURL: "https://coin.unibit.app/", // if live
  techStack: [
    { name: "MongoDB", icon: <TbBrandMongodb className="text-xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "Solidity", icon: <SiSolidity className="text-xl" /> },
    { name: "Ethers.js", icon: <SiEthers className="text-xl" /> },
  ],
},

{
  title: "CRM System",
  description: `A custom-built Customer Relationship Management (CRM) system to manage clients, track interactions, and streamline business operations. Developed using the MERN stack with secure authentication and role-based access control.`,
  githubURL: "https://github.com/taneja-garvit/CRM_System", // replace with actual link
  liveURL: "https://crm-system-ten.vercel.app", // if live
  techStack: [
    { name: "MongoDB", icon: <TbBrandMongodb className="text-xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
  ],
},
{
  title: "Newswave",
  description: `A modern news platform delivering real-time articles and trending stories. Built with the MERN stack, featuring category filters, search, and a clean UI for an enhanced reading experience.`,
  githubURL: "https://github.com/taneja-garvit/NewsWave", // replace with actual link
  liveURL: "https://newswave-phi.vercel.app/", // if live
  techStack: [
    { name: "MongoDB", icon: <TbBrandMongodb className="text-xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
  ],
},
{
  title: "StockSage",
  description: `An AI-powered stock analysis and financial consultancy platform that predicts stock prices, target values, and buy/sell recommendations using candlestick patterns, financial news, and AI models.`,
  githubURL: "https://github.com/krishna3006b/stocksageai", // replace with actual link
  liveURL: "https://stocksage.tech/", // if live
  techStack: [
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "Golang", icon: <SiGo className="text-xl" /> },
    { name: "MongoDB", icon: <TbBrandMongodb className="text-xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-xl" /> },
    { name: "TypeScript", icon: <TbBrandTypescript className="text-xl" /> },
    { name: "AWS", icon: <FaAws className="text-xl" /> },
  ],
},
 {
  title: "MarvelX Solana Wallet",
  description: `A Solana-based wallet built from scratch with features like 2FA authentication and token swap functionality powered by Jupiter. Designed for secure, fast, and user-friendly Solana transactions.`,
  githubURL: "https://github.com/taneja-garvit/solWallet", // replace with actual link
  // liveURL: "https://marvelx-wallet.vercel.app/", // if live
  techStack: [
    { name: "React.js", icon: <FaReact className="text-xl" /> },
    { name: "TypeScript", icon: <TbBrandTypescript className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
    { name: "Solana", icon: <SiSolana className="text-xl" /> },
    { name: "Jupiter", icon: <SiSolana className="text-xl" /> }, // no official icon, using Solana's
    { name: "Firebase", icon: <SiFirebase className="text-xl" /> },
  ],
},
{
  title: "Social Media Flicksy",
  description: `A social media platform built for students and communities with features like posts, likes, comments, and mentor connections. Developed using the MERN stack with token-based engagement and Firebase for authentication.`,
  githubURL: "https://github.com/taneja-garvit/social_media", // replace with actual link
   liveURL: "https://flicksysocialmedia.vercel.app", // if live
  techStack: [
    { name: "MongoDB", icon: <TbBrandMongodb className="text-xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
  ],
},
{
  title: "Send Me Hugs",
  description: `A MERN + Web3 based platform that lets users send virtual hugs powered by blockchain. Integrated with ethers.js for secure transactions and a smooth user experience.`,
  githubURL: "https://github.com/taneja-garvit/SendMehugs", // replace with actual link
  // liveURL: "https://sendmehugs.vercel.app/", // if live
  techStack: [
    { name: "MongoDB", icon: <TbBrandMongodb className="text-xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-xl" /> },
    { name: "Ethers.js", icon: <SiEthers className="text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl" /> },
  ],
},
{
  title: "Billing Software",
  description: `A Java Spring Boot-based billing and invoicing application with secure authentication, invoice generation, and database-backed client management. Designed for businesses to manage transactions efficiently.`,
  githubURL: "https://github.com/taneja-garvit/Billing_Software", // replace with actual link
  // liveURL: "https://billing-software.vercel.app/", // if live
  techStack: [
    { name: "Java", icon: <FaJava className="text-xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-xl" /> },
    { name: "Docker", icon: <SiDocker className="text-xl" /> },
    { name: "AWS", icon: <FaAws className="text-xl" /> },
  ],
},

];
