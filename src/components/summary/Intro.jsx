import React from "react";
import {motion} from "framer-motion";
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

const slideUp = (fromY) => ({
  hidden: {opacity: 0, y: fromY || 0},
  show: {
    opacity: 1,
    y: 0,
    transition: {type: "tween", duration: 0.5},
  },
});

const fadeY = (fromY, delayAmount, durationAmount) => ({
  hidden: {opacity: 0, y: fromY || 0},
  show: {
    opacity: 1,
    y: 0,
    transition: {type: "tween", duration: durationAmount || 0.5, delay: delayAmount || 0},
  },
});

const Intro = () => {
  return (
    <motion.div
      variants={container(0, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className="flex flex-col gap-4 lg:items-start items-center text-center lg:text-left"
    >
      {/* Greeting */}
      <motion.p
        variants={slideUp(20)}
        className="font-jetbrains text-text-muted text-sm tracking-widest uppercase"
      >
        Hello, I am
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={slideUp(30)}
        className="font-jetbrains font-black text-text-primary
                   text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight"
      >
        Garvit Taneja
      </motion.h1>

      {/* Terminal-style role lines */}
      <motion.div
        variants={fadeY(20, 0.3, 0.5)}
        className="font-jetbrains text-sm md:text-base flex flex-col gap-1 mt-2"
      >
        <p className="text-accent">
          <span className="text-text-muted mr-2">{">"}</span>
          full-stack engineer (backend-heavy) - Go · gRPC · distributed systems
        </p>
        <p className="text-text-muted">
          <span className="mr-2">{">"}</span>
          I debugged a payment ledger from crashing under 10 concurrent requests to sustaining 250+ concurrent transfers with zero data corruption, tracing the remaining latency ceiling to connection pool exhaustion
        </p>
        <p className="text-text-muted">
          <span className="mr-2">{">"}</span>
          shaved 35% off inter-service latency redesigning a 7-service platform around gRPC instead of REST
        </p>
        <p className="text-text-muted">
          <span className="mr-2">{">"}</span>
          building AI systems - RAG pipelines, LangChain agents, MCP tooling
        </p>
        
        <p className="text-text-muted">
          <span className="mr-2">{">"}</span>
          $15K+ delivered across freelance &amp; startup clients - real users, real requirements, real feedback loops
          <span className="terminal-cursor ml-0.5">_</span>
        </p>
        {/* <p className="text-text-muted">
          <span className="mr-2">{">"}</span>
          building production data pipelines &amp; currently deep in production-grade system design
          <span className="terminal-cursor ml-0.5">_</span>
        </p> */}
      </motion.div>

      {/* Social icons dock */}
      <motion.div
        variants={fadeY(20, 0.6, 0.5)}
        className="mt-4"
      >
        <DockPanel />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
