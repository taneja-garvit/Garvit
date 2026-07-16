import {forwardRef} from "react";
import {motion} from "framer-motion";

import SectionTitle from "src/components/common/SectionTitle";
import SectionWrapper from "src/hoc/SectionWrapper";
import ExperienceCard from "src/components/experience/ExperienceCard";
import {EXPERIENCES} from "src/data/experience";
import {staggerContainer, fadeIn} from "lib/constants/motion";

const Experience = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="flex flex-col justify-center items-center px-6 py-12"
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle title="Experience" />

          <motion.div
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className="flex flex-col gap-6 w-full"
          >
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeIn("up", "spring", index * 0.1, 0.5)}
              >
                <ExperienceCard {...exp} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(Experience);
