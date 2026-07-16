import {forwardRef} from "react";
import {motion} from "framer-motion";
import {slideIn} from "lib/constants/motion";
import Intro from "src/components/summary/Intro";
import SectionWrapper from "src/hoc/SectionWrapper";

const Summary = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="summary"
      className="w-full py-12 flex items-center justify-center relative"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.1, 0.4)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: true}}
        className="w-full flex flex-col justify-center items-center lg:items-start z-20 px-6 max-w-4xl mx-auto"
      >
        <Intro />
      </motion.div>
    </section>
  );
});

export default SectionWrapper(Summary);
