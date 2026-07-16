import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import ProjectCard from "src/components/projects/ProjectCard";
import {PROJECTS} from "lib/constants/projectList";
import {staggerContainer, fadeIn} from "lib/constants/motion";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-bg-primary px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          className="mb-12"
        >
          {/* Back link */}
          <Link
            to="/"
            className="font-jetbrains text-sm text-text-muted hover:text-accent transition-colors duration-150 flex items-center gap-2 mb-8"
          >
            <span className="text-accent">←</span>
            ~/home
          </Link>

          {/* Page title */}
          <h1 className="font-jetbrains font-black text-text-primary text-4xl md:text-5xl tracking-tight">
            ~/projects
          </h1>
          <div className="mt-3 w-12 h-0.5 bg-accent" />
          <p className="mt-4 font-jetbrains text-sm text-text-muted">
            <span className="text-accent">{">"}</span> {PROJECTS.length} projects — sorted by relevance
          </p>
        </motion.div>

        {/* All projects grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn("up", "spring", index * 0.07, 0.4)}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectsPage;
