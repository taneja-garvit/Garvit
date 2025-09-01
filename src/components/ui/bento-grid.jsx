import {cn} from "lib/utils/cn";
import {useRef} from "react";
import {useEffect} from "react";
import {useState} from "react";
import {motion} from "framer-motion";

export const BentoGrid = ({className, children}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-max grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
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
      className={cn("row-span-1 relative group", className)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={cn(
        "relative rounded-3xl p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl",
        "border border-white/20 dark:border-gray-700/50",
        "flex gap-4 h-full shadow-lg hover:shadow-2xl transition-all duration-500"
      )}>
        <div className="min-w-fit">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
            {/* <img
              src={`${avatar}.jfif`}
              alt={`${name}'s profile pic`}
              className="relative rounded-full w-16 h-16 object-cover border-2 border-white/20 dark:border-gray-600/50"
            /> */}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-200 flex-1">
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">{name}</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{occupation}</p>
          </div>
          
          <div className="flex-1">
            <p
              ref={textRef}
              className={cn(
                "text-sm leading-relaxed text-gray-600 dark:text-gray-300",
                {
                  "line-clamp-6": !showMore,
                }
              )}
            >
              {recommendationText}
            </p>
            
            {isOverflowing && (
              <button
                className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-2 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
