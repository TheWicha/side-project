const MobileMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <div
      className={`
        absolute top-25 left-0 right-0 
        bg-slate-900 border-b border-slate-800
        shadow-lg shadow-slate-900/50
        md:hidden 
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          className={`
            block px-3 py-2 
            text-slate-300 hover:text-blue-400 hover:bg-slate-800
            transition-all duration-200 rounded-md
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }
          `}
          style={{ transitionDelay: "100ms" }}
        >
          Home
        </a>
        <a
          href="#"
          className={`
            block px-3 py-2 
            text-slate-300 hover:text-blue-400 hover:bg-slate-800
            transition-all duration-200 rounded-md
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }
          `}
          style={{ transitionDelay: "150ms" }}
        >
          About
        </a>
        <a
          href="#"
          className={`
            block px-3 py-2 
            text-slate-300 hover:text-blue-400 hover:bg-slate-800
            transition-all duration-200 rounded-md
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }
          `}
          style={{ transitionDelay: "200ms" }}
        >
          Services
        </a>
        <a
          href="#"
          className={`
            block px-3 py-2 
            text-slate-300 hover:text-blue-400 hover:bg-slate-800
            transition-all duration-200 rounded-md
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }
          `}
          style={{ transitionDelay: "250ms" }}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
