import {motion} from "framer-motion";

import {slideIn} from "lib/constants/motion";

import logo from "src/assets/logo.svg";
import logoWhite from "src/assets/logo-white.svg";

import DarkModeButton from "src/components/DarkModeButton";
import Menu from "src/components/navigation/Menu";
import MobileMenu from "src/components/navigation/MobileMenu";

const NavigationBar = () => {
  return (
    <header id="navbar" className="w-full fixed top-0 z-[1000] ">
      <nav
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[98vw] max-w-6xl bg-white/80 dark:bg-[#181a2a]/90 backdrop-blur-2xl rounded-3xl shadow-2xl flex items-center justify-between px-14 py-6 transition-all duration-300 hover:scale-[1.03] border border-white/40 dark:border-white/10 gap-10"
      >
        {/* <motion.div
          variants={slideIn("left", "spring", 0.2, 0.5)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{once: true}}
          role="link"
          className="cursor-pointer flex gap-2 justify-center items-center hover:text-primary"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: "4rem",
              behavior: "smooth",
            });
          }}
        >
         Garvit
        </motion.div> */}
        
        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex gap-6 relative justify-center items-center flex-1">
          <div className="flex gap-6 relative">
            <Menu />
            {/* <DarkModeButton /> */}
          </div>
        </div>
        
        {/* Mobile Menu - Right Side */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
