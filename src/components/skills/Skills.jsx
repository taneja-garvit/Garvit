import {forwardRef} from "react";
import {motion} from "framer-motion";

import SkillCard from "src/components/skills/SkillCard";
import SectionTitle from "src/components/common/SectionTitle";
import SectionWrapper from "src/hoc/SectionWrapper";
import {staggerContainer} from "lib/constants/motion";
import {SKILLS} from "lib/constants";

// Core stack — shown prominently
const CORE_SKILLS = ["JavaScript", "Java", "Python", "Go", "TypeScript", "Node.js", "FastAPI", "REST", "gRPC", "JWT", "Microservices", "Docker", "ReactJS", "Next.js"];

// Secondary / other skills
const OTHER_SKILLS = ["LLMs", "RAG", "LangChain", "Vector Databases", "Embeddings", "Git/GitHub", "AWS S3", "CloudWatch", "Postman", "Vercel", "Render", "MongoDB", "PostgreSQL"];

const SubGroupLabel = ({label}) => (
  <div className="w-full col-span-full mt-4 mb-1">
    <span className="font-jetbrains text-xs text-text-muted uppercase tracking-widest">
      <span className="text-accent mr-1">//</span> {label}
    </span>
    <div className="mt-1 h-px bg-border w-full" />
  </div>
);

const Skills = forwardRef((_, ref) => {
  const coreSkills = SKILLS.filter((s) => CORE_SKILLS.includes(s.title));
  const otherSkills = SKILLS.filter((s) => OTHER_SKILLS.includes(s.title));

  return (
    <section
      ref={ref}
      id="skills"
      className="w-full py-12 flex flex-col gap-10 justify-center items-center md:px-14 px-5"
    >
      <SectionTitle title="Skills" />

      <div className="w-full max-w-4xl">
        {/* Core Stack */}
        <motion.div
          variants={staggerContainer(0.3, 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{once: true}}
        >
          <SubGroupLabel label="Core Stack" />
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-4 mt-4">
            {coreSkills.map((skill, index) => (
              <SkillCard key={skill.title} title={skill.title} Icon={skill.icon} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Other */}
        <motion.div
          variants={staggerContainer(0.2, 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{once: true}}
          className="mt-8"
        >
          <SubGroupLabel label="Other" />
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3 mt-4 opacity-60">
            {otherSkills.map((skill, index) => (
              <SkillCard key={skill.title} title={skill.title} Icon={skill.icon} index={index} small />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionWrapper(Skills);
