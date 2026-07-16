import {motion} from "framer-motion";
import {textVariant} from "lib/constants/motion";

const SectionTitle = ({title}) => {
  return (
    <motion.div
      variants={textVariant(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      className="text-center"
    >
      <h2 className="font-jetbrains font-bold text-4xl md:text-5xl text-text-primary mb-3 tracking-tight">
        {title}
      </h2>
      {/* Thin accent underline — no gradient, no glow */}
      <div className="w-12 h-0.5 bg-accent mx-auto" />
    </motion.div>
  );
};

export default SectionTitle;
