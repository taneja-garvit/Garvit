import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {CONTRIBUTIONS} from "src/data/contributions";
import {staggerContainer, fadeIn} from "lib/constants/motion";

const ContributionsPage = () => {
  return (
    <main className="min-h-screen bg-bg-primary px-6 py-20">
      <div className="max-w-4xl mx-auto">
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
            ~/contributions
          </h1>
          <div className="mt-3 w-12 h-0.5 bg-accent" />
          <p className="mt-4 font-jetbrains text-sm text-text-muted">
            <span className="text-accent">{">"}</span> Open source contributions
          </p>
        </motion.div>

        {/* Contributions list */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {CONTRIBUTIONS.map((repo, repoIndex) => (
            <motion.div
              key={repo.repo}
              variants={fadeIn("up", "spring", repoIndex * 0.1, 0.5)}
              className="bg-bg-surface border border-border rounded-sm p-6"
            >
              {/* Repo header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={repo.iconUrl}
                  alt={repo.org}
                  className="w-10 h-10 rounded-full border border-border"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-jetbrains font-bold text-text-primary text-lg">
                      {repo.org}/{repo.repo}
                    </h2>
                    {repo.ycBatch && (
                      <span className="font-jetbrains text-[10px] text-accent border border-accent rounded-sm px-1.5 py-0.5 uppercase tracking-wider">
                        {repo.ycBatch}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* PR count */}
              <p className="font-jetbrains text-text-muted text-xs mb-4">
                {repo.prs.length} {repo.prs.length === 1 ? "contribution" : "contributions"}
              </p>

              {/* PRs list */}
              <div className="space-y-3 border-t border-border pt-4">
                {repo.prs.map((pr, prIndex) => (
                  <a
                    key={prIndex}
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 p-3 bg-bg-primary rounded-sm border border-border hover:border-accent transition-colors duration-150"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-jetbrains text-text-primary text-sm group-hover:text-accent transition-colors duration-150 leading-relaxed break-words">
                        {pr.title}
                      </p>
                    </div>

                    {/* Status badge */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`font-jetbrains text-[10px] border rounded-sm px-2 py-1 uppercase tracking-wider ${
                          pr.status === "open"
                            ? "text-accent border-accent"
                            : pr.status === "closed"
                              ? "text-text-muted border-border"
                              : "text-text-muted border-border"
                        }`}
                      >
                        {pr.status}
                      </span>
                      <span className="text-accent text-sm shrink-0">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ContributionsPage;
