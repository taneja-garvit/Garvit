import {motion} from "framer-motion";
import {fadeIn} from "lib/constants/motion";

const SkillCard = ({title, Icon, index, small = false}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      whileHover={{borderColor: "#00d9a3"}}
      className={`
        group flex flex-col justify-center items-center gap-1
        bg-bg-surface border border-border rounded-sm
        transition-colors duration-150 cursor-default
        ${small ? "p-2 w-full aspect-square" : "p-3 w-full aspect-square"}
      `}
    >
      <Icon
        className={`
          text-text-muted group-hover:text-accent transition-colors duration-150
          ${small ? "w-5 h-5" : "w-7 h-7 md:w-8 md:h-8"}
        `}
      />
      <h3
        className={`
          font-jetbrains text-center text-text-muted group-hover:text-text-primary
          transition-colors duration-150 leading-tight
          ${small ? "text-[9px]" : "text-[10px] md:text-xs"}
        `}
      >
        {title}
      </h3>
    </motion.div>
  );
};

export default SkillCard;
