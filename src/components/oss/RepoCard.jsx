import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {BsGithub} from "src/components/icons";

const RepoCard = ({repo, description, ycBatch, prs}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-bg-surface border border-border rounded-sm overflow-hidden flex flex-col h-full">
      {/* Card Header (Collapsed State) */}
      <div 
        className="p-6 cursor-pointer hover:bg-border/30 transition-colors duration-150 flex-1 flex flex-col"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <BsGithub className="text-text-primary text-lg shrink-0" />
            <h3 className="font-jetbrains font-bold text-text-primary text-sm break-all">
              {repo}
            </h3>
          </div>
          {ycBatch && (
            <span className="shrink-0 font-jetbrains text-[10px] text-accent border border-accent rounded-sm px-1.5 py-0.5 uppercase tracking-wider">
              {ycBatch}
            </span>
          )}
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-jetbrains text-xs text-text-muted">
            {prs.length} {prs.length === 1 ? "contribution" : "contributions"}
          </span>
          <span className="font-jetbrains text-xs text-accent">
            {isExpanded ? "collapse ↑" : "view all →"}
          </span>
        </div>
      </div>

      {/* Accordion Content (Expanded State) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: "auto", opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.2, ease: "easeInOut"}}
            className="border-t border-border bg-bg-primary/30"
          >
            <div className="p-4 flex flex-col gap-3">
              {prs.map((pr, index) => (
                <a
                  key={index}
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-3 bg-bg-surface border border-border hover:border-accent rounded-sm transition-colors duration-150"
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="font-jetbrains font-medium text-text-primary text-sm group-hover:text-accent transition-colors duration-150">
                      {pr.title}
                    </h4>
                    <span 
                      className={`shrink-0 font-jetbrains text-[10px] border rounded-sm px-1.5 py-0.5 uppercase tracking-wider ${
                        pr.status === "merged" 
                          ? "text-accent border-accent" 
                          : "text-text-muted border-text-muted"
                      }`}
                    >
                      {pr.status}
                    </span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {pr.description}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RepoCard;
