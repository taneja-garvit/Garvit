const NavigationBar = () => {
  return (
    <header
      id="navbar"
      className="w-full fixed top-0 z-[1000] bg-bg-primary/95 backdrop-blur-sm border-b border-border"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-center px-6 py-4">
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <Menu />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden w-full flex justify-end">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

import Menu from "src/components/navigation/Menu";
import MobileMenu from "src/components/navigation/MobileMenu";

export default NavigationBar;
