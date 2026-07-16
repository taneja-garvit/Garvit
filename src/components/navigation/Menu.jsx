import {motion} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import {useActiveIndex} from "src/contexts/ActiveIndexContextProvider";

const TERMINAL_TABS = [
  {id: "experience",   label: "~/experience", href: "#experience", type: "hash"},
  {id: "projects",     label: "~/projects",   href: "/projects",   type: "route"},
  {id: "oss",          label: "~/oss",        href: "/contributions", type: "route"},
  {id: "skills",       label: "~/skills",     href: "#skills",     type: "hash"},
  // {id: "testimonials", label: "~/testimonials"},
  {id: "contactme",    label: "~/contact",    href: "#contactme",  type: "hash"},
];

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.08, type: "tween"},
  },
};

const item = {
  hidden: {opacity: 0, y: -8},
  show: {opacity: 1, y: 0, transition: {duration: 0.3, type: "tween"}},
};

const Menu = () => {
  const {activeIndex} = useActiveIndex();
  const location = useLocation();

  const handleHashClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center gap-6 select-none"
    >
      {TERMINAL_TABS.map((tab, index) => {
        // Determine if active based on location and activeIndex
        const isActive = 
          tab.type === "hash" && location.pathname === "/" && activeIndex === index;

        return (
          <motion.li key={tab.id} variants={item}>
            {tab.type === "route" ? (
              <Link
                to={tab.href}
                className={`
                  font-jetbrains text-sm tracking-tight
                  pb-0.5 border-b-2
                  transition-colors duration-150
                  ${location.pathname === tab.href
                    ? "text-accent border-accent"
                    : "text-text-muted border-transparent hover:text-text-primary hover:border-border"
                  }
                `}
              >
                {tab.label}
              </Link>
            ) : (
              <a
                href={tab.href}
                onClick={(e) => handleHashClick(e, tab.href)}
                className={`
                  font-jetbrains text-sm tracking-tight
                  pb-0.5 border-b-2
                  transition-colors duration-150 cursor-pointer
                  ${isActive
                    ? "text-accent border-accent"
                    : "text-text-muted border-transparent hover:text-text-primary hover:border-border"
                  }
                `}
              >
                {tab.label}
              </a>
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default Menu;
