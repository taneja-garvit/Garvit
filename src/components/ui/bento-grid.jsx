import {cn} from "lib/utils/cn";
import {useRef, useEffect, useState} from "react";
import {motion} from "framer-motion";

export const BentoGrid = ({className, children}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-max grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({className, name, recommendationText, occupation, avatar}) => {
  const [showMore, setShowMore] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, []);

  return (
    <motion.div
      className={cn("row-span-1", className)}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4}}
    >
      <div
        className={cn(
          "relative bg-bg-surface border border-border rounded-sm p-6",
          "flex flex-col gap-3 h-full",
          "hover:border-accent transition-colors duration-150"
        )}
      >
        {/* Name + occupation */}
        <div>
          <h3 className="font-jetbrains font-bold text-text-primary text-sm">{name}</h3>
          <p className="font-jetbrains text-accent text-xs mt-0.5">{occupation}</p>
        </div>

        {/* Quote */}
        <div className="flex-1">
          <p
            ref={textRef}
            className={cn(
              "text-text-muted text-sm leading-relaxed",
              {"line-clamp-6": !showMore}
            )}
          >
            &ldquo;{recommendationText}&rdquo;
          </p>

          {isOverflowing && (
            <button
              className="font-jetbrains text-xs text-accent mt-2 hover:text-text-primary transition-colors duration-150"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "show less" : "show more"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
