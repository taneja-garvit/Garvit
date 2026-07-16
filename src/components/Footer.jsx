import {motion} from "framer-motion";
import {BsGithub, BsLinkedin, BsTwitterX} from "react-icons/bs";
import {MdEmail, MdLocationOn} from "react-icons/md";

const SOCIAL_LINKS = [
  {href: "https://github.com/taneja-garvit",          icon: BsGithub,    label: "GitHub"},
  {href: "https://www.linkedin.com/in/garvit-taneja/", icon: BsLinkedin,  label: "LinkedIn"},
  {href: "https://x.com/tanejagarvit_",                icon: BsTwitterX,  label: "X"},
];

const NAV_LINKS = [
  {name: "~/skills",       href: "#skills"},
  {name: "~/experience",   href: "#experience"},
  {name: "~/projects",     href: "#projects"},
  {name: "~/oss",          href: "#contributions"},
  // {name: "~/testimonials", href: "#testimonials"},
  {name: "~/contact",      href: "#contactme"},
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div>
              <h3 className="font-jetbrains font-black text-text-primary text-xl">Garvit Taneja</h3>
              <p className="font-jetbrains text-accent text-xs mt-1">backend engineer</p>
            </div>
            <p className="font-jetbrains text-text-muted text-xs leading-relaxed">
              Building systems that scale.
            </p>
            {/* Social icons — bare, no background */}
            <div className="flex gap-4 mt-1">
              {SOCIAL_LINKS.map(({href, icon: Icon, label}) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-muted hover:text-accent text-lg transition-colors duration-150"
                  whileHover={{y: -2}}
                  transition={{type: "spring", stiffness: 400}}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-jetbrains text-xs text-text-muted uppercase tracking-widest mb-1">
              <span className="text-accent mr-1">//</span> Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-jetbrains text-sm text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-jetbrains text-xs text-text-muted uppercase tracking-widest mb-1">
              <span className="text-accent mr-1">//</span> Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MdEmail className="text-accent text-sm flex-shrink-0" />
                <span className="font-jetbrains text-text-muted text-xs">taneja.garvit29@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-accent text-sm flex-shrink-0" />
                <span className="font-jetbrains text-text-muted text-xs">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-jetbrains text-text-muted text-xs">
            © {currentYear} Garvit Taneja. All rights reserved.
          </p>
          <p className="font-jetbrains text-text-muted text-xs">
            <span className="text-accent">{">"}</span> built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
