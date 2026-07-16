import {forwardRef} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import SectionTitle from "src/components/common/SectionTitle";
import SectionWrapper from "src/hoc/SectionWrapper";
import {CONTRIBUTIONS} from "src/data/contributions";
import {fadeIn, slideIn} from "lib/constants/motion";

const OpenSource = forwardRef((_, ref) => {
  const totalPRs = CONTRIBUTIONS.reduce((sum, repo) => sum + repo.prs.length, 0);
  const ycRepos = CONTRIBUTIONS.filter((repo) => repo.ycBatch).length;

  return (
    <section
      ref={ref}
      id="oss"
      className="flex flex-col justify-center items-center px-6 py-12"
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <SectionTitle title="Open Source" />

          <motion.div
            variants={slideIn("up", "spring", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            className="bg-bg-surface border border-border rounded-sm p-8 w-full"
          >
            {/* Repo icons row */}
            <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
              {CONTRIBUTIONS.map((repo, index) => (
                <motion.img
                  key={repo.repo}
                  src={repo.iconUrl}
                  alt={repo.org}
                  title={`${repo.org}/${repo.repo}`}
                  variants={fadeIn("up", "spring", index * 0.1, 0.5)}
                  className="w-12 h-12 rounded-full border border-border hover:border-accent transition-colors duration-150 cursor-pointer"
                />
              ))}
            </div>

            {/* Stat line */}
            {/* <p className="font-jetbrains text-text-muted text-sm text-center mb-6">
              <span className="text-accent">{totalPRs} contributions</span> across{" "}
              <span className="text-accent">{CONTRIBUTIONS.length} repositories</span> — {ycRepos} backed
              by YC
            </p> */}

            {/* Button */}
            <div className="flex justify-center">
              <Link
                to="/contributions"
                className="font-jetbrains text-sm text-red-500 border border-border rounded-sm
                           px-5 py-2.5 hover:border-accent hover:text-accent transition-colors duration-150
                           flex items-center gap-2"
              >
                Show Contributions
                <span className="text-accent">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(OpenSource);
