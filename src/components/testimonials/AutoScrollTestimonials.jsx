import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {TESTIMONIALS} from "lib/constants";

const AutoScrollTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="bg-white/10 dark:bg-black/20 backdrop-blur-xl 
                         border border-white/20 dark:border-gray-700/50 
                         rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
                  {/* <img
                    src={`${TESTIMONIALS[currentIndex].avatar}.jfif`}
                    alt={`${TESTIMONIALS[currentIndex].name}'s profile`}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-white/20 dark:border-gray-600/50"
                  /> */}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {TESTIMONIALS[currentIndex].name}
                  </h3>
                  <p className="text-purple-300 text-sm">
                    {TESTIMONIALS[currentIndex].occupation}
                  </p>
                </div>
              </div>
              
              <motion.p
                className="text-gray-200 leading-relaxed text-lg italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                "{TESTIMONIALS[currentIndex].recommendationText}"
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {TESTIMONIALS.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-purple-500 scale-110"
                : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollTestimonials; 