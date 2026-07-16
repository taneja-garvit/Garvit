import {motion} from "framer-motion";

const ExperienceCard = ({company, ycBatch, role, dateRange, bullets}) => {
  return (
    <motion.div
      whileHover={{x: 4}}
      className="group relative bg-bg-surface border border-border rounded-sm p-6 
                 transition-all duration-200"
    >
      {/* Left accent border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l-sm" />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-jetbrains font-bold text-text-primary text-lg">
              {company}
            </h3>
            {ycBatch && (
              <span className="font-jetbrains text-[10px] text-accent border border-accent rounded-sm px-1.5 py-0.5 uppercase tracking-wider">
                {ycBatch}
              </span>
            )}
          </div>
          <p className="font-jetbrains text-accent text-sm">{role}</p>
        </div>
        <div className="font-jetbrains text-text-muted text-xs whitespace-nowrap">
          {dateRange}
        </div>
      </div>

      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex gap-3 text-text-muted text-sm leading-relaxed">
            <span className="text-accent shrink-0 mt-1">{">"}</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
