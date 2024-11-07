interface MobileMenuButtonProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const MobileMenuButton = ({
  toggleMenu,
  isMenuOpen,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden p-2 rounded-md text-slate-300 hover:text-blue-400 hover:bg-slate-800 transition-colors"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isMenuOpen ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
};
export default MobileMenuButton;
