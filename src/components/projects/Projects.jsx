import {forwardRef} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import ProjectCard from "src/components/projects/ProjectCard";
import SectionTitle from "src/components/common/SectionTitle";
import SectionWrapper from "src/hoc/SectionWrapper";
import {PROJECTS} from "lib/constants/projectList";
import {staggerContainer, fadeIn} from "lib/constants/motion";

// Top 3 strongest backend-relevant projects shown on homepage
const TOP_PROJECT_TITLES = ["DevHire", "Resolve AI", "Payment Ledger System"];
const topProjects = PROJECTS.filter((p) => TOP_PROJECT_TITLES.includes(p.title))
  .sort((a, b) => TOP_PROJECT_TITLES.indexOf(a.title) - TOP_PROJECT_TITLES.indexOf(b.title));

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col justify-center items-center px-6 py-12"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          <SectionTitle title="Projects" />

          {/* Static 3-column responsive grid */}
          <motion.div
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
          >
            {topProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.5)}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {/* View all projects link */}
          <Link
            to="/projects"
            className="font-jetbrains text-sm text-red-500 border border-border rounded-sm
                       px-5 py-2.5 hover:border-accent hover:text-accent transition-colors duration-150
                       flex items-center gap-2"
          >
            View all projects
            <span className="text-accent">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(Projects);
