import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import {BsGithub, CgWebsite} from "src/components/icons";

const Slide = ({title, description, githubURL, liveURL, techStack}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    let {currentTarget, clientX, clientY} = e;
    let {left, top} = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div className="mx-auto flex items-center justify-center p-4">
      <motion.div
        style={{
          "--dark-purple": "4 6 22",
          "--light-purple": "120 119 198",
          "--bg-color": "linear-gradient(rgb(var(--dark-purple)), rgb(var(--dark-purple)))",
          "--border-color": `linear-gradient(145deg,
            rgb(var(--light-purple)) 0%,
            rgb(var(--light-purple) / 0.3) 33.33%,
            rgb(var(--light-purple) / 0.14) 66.67%,
            rgb(var(--light-purple) / 0.1) 100%)
          `,
        }}
        className="group relative lg:max-w-md max-w-lg rounded-3xl 
                   bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
                   border border-white/20 dark:border-gray-700/50
                   shadow-2xl hover:shadow-3xl transition-all duration-500
                   p-8 hover:scale-105 hover:-translate-y-2"
        onMouseMove={handleMouseMove}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        <div className="relative z-10">
          {/* Project title */}
          <motion.h3 
            className="text-2xl font-bold text-gray-800 dark:text-white mb-4
                       bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 
                       bg-clip-text text-transparent"
          >
            {title}
          </motion.h3>

          {/* Project description */}
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed
                       text-sm md:text-base"
          >
            {description}
          </motion.p>

          {/* Tech stack */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full
                           bg-gradient-to-r from-blue-100 to-purple-100 
                           dark:from-blue-900/30 dark:to-purple-900/30
                           border border-blue-200/50 dark:border-blue-700/50
                           text-blue-700 dark:text-blue-300 text-xs font-medium
                           hover:scale-105 transition-transform duration-200"
              >
                {tech.icon}
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            className="flex gap-3"
          >
            <motion.a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-gradient-to-r from-gray-800 to-gray-700 
                         dark:from-gray-700 dark:to-gray-600
                         text-white font-medium text-sm
                         hover:from-gray-700 hover:to-gray-600 
                         dark:hover:from-gray-600 dark:hover:to-gray-500
                         transition-all duration-300 shadow-lg hover:shadow-xl
                         hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BsGithub className="text-lg" />
              GitHub
            </motion.a>
            
            <motion.a
              href={liveURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         dark:from-blue-500 dark:to-purple-500
                         text-white font-medium text-sm
                         hover:from-blue-500 hover:to-purple-500 
                         dark:hover:from-blue-400 dark:hover:to-purple-400
                         transition-all duration-300 shadow-lg hover:shadow-xl
                         hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CgWebsite className="text-lg" />
              Live Demo
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide;
