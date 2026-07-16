import {motion} from "framer-motion";
import {BsGithub, CgWebsite} from "src/components/icons";

const ProjectCard = ({title, description, githubURL, liveURL, techStack}) => {
  return (
    <motion.div
      whileHover={{borderColor: "#00d9a3"}}
      className="group flex flex-col gap-4 bg-bg-surface border border-border rounded-sm p-6
                 transition-colors duration-200 h-full"
    >
      {/* Project title */}
      <h3 className="font-jetbrains font-bold text-text-primary text-lg leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="font-jetbrains text-[10px] text-text-muted border border-border rounded-sm
                       px-2 py-0.5 flex items-center gap-1 group-hover:border-border
                       hover:border-accent hover:text-accent transition-colors duration-150"
          >
            <span className="text-xs">{tech.icon}</span>
            {tech.name}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-1">
        {githubURL && (
          <a
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains text-xs text-text-muted border border-border rounded-sm
                       px-3 py-1.5 flex items-center gap-1.5
                       hover:border-accent hover:text-accent transition-colors duration-150"
          >
            <BsGithub className="text-sm" />
            GitHub
          </a>
        )}
        {liveURL && (
          <a
            href={liveURL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains text-xs text-text-muted border border-border rounded-sm
                       px-3 py-1.5 flex items-center gap-1.5
                       hover:border-accent hover:text-accent transition-colors duration-150"
          >
            <CgWebsite className="text-sm" />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
