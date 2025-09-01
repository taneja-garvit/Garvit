import React from "react";
import {motion} from "framer-motion";
import {FlipWords} from "src/components/ui/flip-words-new";
import {MdArchitecture, FaPalette, FaCode} from "src/components/icons";
import {DockPanel} from "src/components/summary/DockPanel";

const container = (delayChildrenValue = 0, staggerChildrenValue = 0) => ({
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerChildrenValue,
      delayChildren: delayChildrenValue,
      type: "tween",
    },
  },
});

const animateX = (fromX, durationAmount = 0.5) => ({
  hidden: {opacity: 0, x: fromX || 0},
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: durationAmount,
    },
  },
});

const slideUp = (fromY, delayAmount) => ({
  hidden: {opacity: 0, y: fromY || 0},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
});

const fadeY = (fromY, delayAmount, durationAmount) => ({
  hidden: {opacity: 0, y: fromY || 0},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: durationAmount || 0.5,
      delay: delayAmount || 0,
    },
  },
});

const words = [
  "crafting seamless user experiences",
  "building robust & scalable solutions",
  "leading innovative initiatives",
];

const Intro = () => {
  return (
    <motion.div
      variants={container(0, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className="p-5 flex flex-col lg:justify-start lg:items-start justify-center items-center"
    >
      <motion.div
        variants={slideUp(50)}
        className="text-xl text-gray-500 dark:text-white pl-2 tracking-normal
                  font-poppins text-left flex justify-between w-full items-center md:flex-row flex-col-reverse"
      >
        <span className="align-bottom">Hello, I am</span>
        <DockPanel />
      </motion.div>
      
      <motion.h1
        variants={slideUp(50)}
        className="text-6xl lg:text-8xl md:text-8xl drop-shadow-2xl
                      uppercase font-black
                      bg-clip-text
                      bg-gradient-to-r
                      from-secondary via-purple-600 to-tertiary dark:from-secondary dark:via-purple-400 dark:to-white text-transparent
                      font-archivo relative"
      >
        Garvit Taneja
        <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-purple-600/20 to-tertiary/20 dark:from-secondary/20 dark:via-purple-400/20 dark:to-white/20 blur-xl -z-10"></div>
      </motion.h1>

      <motion.div
        variants={container(1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="flex gap-3 w-full lg:pl-1
                  md:justify-start md:items-start md:flex-row flex-col justify-center items-center
                  lg:text-md text-sm font-archivo tracking-[0.04rem]
                  dark:text-white font-medium
                  lg:pt-6 pt-4"
      >
        <motion.span
          variants={animateX(50)}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 
                     backdrop-blur-sm border border-blue-500/20 dark:border-blue-400/30 
                     text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full 
                     flex gap-2 justify-center items-center font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaCode className="text-blue-600 dark:text-blue-400" />
          Full Stack Developer
        </motion.span>
        <motion.span
          variants={animateX(50)}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 
                     backdrop-blur-sm border border-green-500/20 dark:border-green-400/30 
                     text-green-700 dark:text-green-300 px-4 py-2 rounded-full 
                     flex gap-2 justify-center items-center font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MdArchitecture className="text-green-600 dark:text-green-400" /> 
          Engineer
        </motion.span>
        <motion.span
          variants={animateX(50)}
          className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 dark:from-pink-500/20 dark:to-rose-500/20 
                     backdrop-blur-sm border border-pink-500/20 dark:border-pink-400/30 
                     text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full 
                     flex gap-2 justify-center items-center font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaPalette className="text-pink-600 dark:text-pink-400" /> 
          Passionate For Backend
        </motion.span>
      </motion.div>
      
      <motion.div
        variants={fadeY(50, 1.7, 1)}
        className="flex justify-start items-center lg:pl-1 lg:pt-6 pt-4"
      >
        <div
          className="hidden text-xl font-medium text-gray-700 dark:text-gray-200
          lg:flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start
          backdrop-blur-sm bg-white/5 dark:bg-black/5 rounded-xl p-4 border border-white/10 dark:border-gray-700/50"
        >
          <span className="mr-2">My passion lies in</span>
          <FlipWords words={words} duration={5000} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
