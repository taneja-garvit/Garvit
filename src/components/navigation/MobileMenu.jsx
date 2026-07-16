import {useRef, useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "src/components/icons";

const TERMINAL_TABS = [
  {id: "experience",   label: "~/experience", href: "#experience", type: "hash"},
  {id: "projects",     label: "~/projects",   href: "/projects",   type: "route"},
  {id: "oss",          label: "~/oss",        href: "/contributions", type: "route"},
  {id: "skills",       label: "~/skills",     href: "#skills",     type: "hash"},
  // {id: "testimonials", label: "~/testimonials"},
  {id: "contactme",    label: "~/contact",    href: "#contactme",  type: "hash"},
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const sideNavRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleHashClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="lg:hidden text-text-muted hover:text-accent w-9 h-9 flex justify-center items-center text-2xl"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            ref={sideNavRef}
            initial={{x: "-100%"}}
            animate={{x: 0}}
            exit={{x: "-100%"}}
            transition={{type: "tween", duration: 0.25}}
            className="lg:hidden fixed top-0 left-0 w-[60%] min-h-screen z-[2000]
                       bg-bg-surface border-r border-border"
          >
            <div className="p-6 border-b border-border">
              <span className="font-jetbrains text-accent text-sm">garvit@portfolio:~$</span>
            </div>
            <ul className="py-4">
              {TERMINAL_TABS.map((tab) => (
                <li key={tab.id}>
                  {tab.type === "route" ? (
                    <Link
                      to={tab.href}
                      onClick={() => setOpen(false)}
                      className={`block px-6 py-3 font-jetbrains text-sm
                        transition-colors duration-150
                        ${location.pathname === tab.href
                          ? "text-accent bg-accent/10"
                          : "text-text-muted hover:text-accent hover:bg-accent/5"
                        }`}
                    >
                      {tab.label}
                    </Link>
                  ) : (
                    <a
                      href={tab.href}
                      onClick={(e) => handleHashClick(e, tab.href)}
                      className="block px-6 py-3 font-jetbrains text-sm text-text-muted
                                 hover:text-accent hover:bg-accent/5 transition-colors duration-150 cursor-pointer"
                    >
                      {tab.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
