import {forwardRef} from "react";
import {motion} from "framer-motion";

import SectionTitle from "src/components/common/SectionTitle";
import SectionWrapper from "src/hoc/SectionWrapper";

import bnwPic from "src/assets/bnwPic.jpeg";
import pic from "src/assets/pic.jpeg";

import {slideIn} from "lib/constants/motion";

const AboutMe = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="aboutme"
      className="relative min-h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                 overflow-hidden py-40"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Modern organic SVG blob background behind about card */}
      <div className="absolute -top-32 -left-32 w-[80vw] h-[60vw] -z-20 pointer-events-none">
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="aboutBlobGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M 0 400 Q 200 200 400 400 T 800 400 V 600 H 0 Z" fill="url(#aboutBlobGradient)" opacity="0.7" />
          <ellipse cx="600" cy="100" rx="120" ry="60" fill="#a5b4fc" opacity="0.18" />
          <ellipse cx="200" cy="80" rx="80" ry="40" fill="#38bdf8" opacity="0.12" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-16">
          <SectionTitle title="About Me" />
          
          <motion.div
            variants={slideIn("up", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            className="relative group max-w-6xl mx-auto"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
                            border border-white/20 dark:border-gray-700/50 
                            rounded-3xl p-8 md:p-12 shadow-2xl">
              
              {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
              <div className="items-center">
                {/* Image Section */}
                {/* <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                  <div className="relative">
                    <img
                      src={pic}
                      className="block dark:hidden w-full h-auto rounded-2xl shadow-2xl"
                      alt="Hardik Verma"
                    />
                    <img
                      src={bnwPic}
                      className="hidden dark:block w-full h-auto rounded-2xl shadow-2xl"
                      alt="Hardik Verma"
                    />
                  </div>
                </motion.div> */}

                {/* Content Section */}
                <motion.div 
  className="space-y-6"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <div>
    <h3 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-4">
      Backend Developer 
    </h3>
    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
      I’m Garvit, a{" "}
      <span className="text-purple-600 dark:text-purple-400 font-semibold">
        backend-focused developer
      </span>{" "}
      with strong experience in{" "}
      <span className="text-purple-600 dark:text-purple-400 font-semibold">
        Java, Spring Boot, Node.js, and Golang
      </span>
      . I specialize in building scalable systems, APIs, and high-performance
      backend architectures.
    </p>
  </div>

  <div className="space-y-4">
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      Over the last few years, I’ve worked on{" "}
      <span className="text-purple-600 dark:text-purple-400 font-semibold">
        freelance projects, startup products, and US client solutions, delivering projects worth over $15,000.
      </span>
      . My work includes a Solana-based wallet with{" "}
      <span className="text-purple-600 dark:text-purple-400 font-semibold">
        2FA & swap features
      </span>
      , building microservices with{" "}
      <span className="text-purple-600 dark:text-purple-400 font-semibold">
        Go (Gin)
      </span>
      , and delivering production-ready systems for fintech and Web3 projects.
    </p>
    
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      I’ve also participated in{" "}
      <span className="text-purple-600 dark:text-purple-400 font-semibold">
        hackathons
      </span>{" "}
      (Chainlink, Manipal University – Top 10, and more), where I learned to
      build fast, collaborate with teams, and deliver working products under
      pressure.
    </p>

    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      Currently, I’m deepening my expertise in{" "}
      <span className="text-purple-600 dark:text-purple-400 font-semibold">
        system design, cloud (AWS), and containerization (Docker)
      </span>{" "}
      to create reliable, industry-grade solutions.
    </p>
  </div>

  {/* Skills highlights */}
  <div className="flex flex-wrap gap-3 pt-4">
    {[
      "Java", "Spring Boot", "Node.js", "Golang", "MongoDB",
      "Docker", "AWS", "System Design", "React.js", "TypeScript"
    ].map((skill, index) => (
      <motion.span
        key={skill}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 
                   dark:from-purple-900/30 dark:to-pink-900/30
                   border border-purple-200/50 dark:border-purple-700/50
                   text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium
                   hover:scale-105 transition-transform duration-200"
      >
        {skill}
      </motion.span>
    ))}
  </div>
</motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(AboutMe);
