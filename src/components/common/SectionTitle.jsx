import {motion} from "framer-motion";
import {textVariant} from "lib/constants/motion";

const SectionTitle = ({title}) => {
  return (
    <motion.div 
      variants={textVariant(0.1)} 
      initial="hidden" 
      whileInView="show"
      className="text-center"
    >
      <h2 className="text-5xl md:text-6xl font-bold 
                     bg-gradient-to-r from-gray-800 via-purple-600 to-gray-800 
                     dark:from-white dark:via-purple-400 dark:to-white 
                     bg-clip-text text-transparent
                     mb-4 relative">
        {title}
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-800/20 via-purple-600/20 to-gray-800/20 dark:from-white/20 dark:via-purple-400/20 dark:to-white/20 blur-xl -z-10"></div>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;
