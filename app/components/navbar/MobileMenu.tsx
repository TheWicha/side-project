import clsx from "clsx";
import { menuLinks } from "../../copy";

const MobileMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <div
      className={clsx(
        "absolute top-25 left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-lg shadow-slate-900/50 md:hidden transition-opacity duration-300 ease-in-out",
        {
          "opacity-100 visible": isMenuOpen,
          "opacity-0 invisible": !isMenuOpen,
        }
      )}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {menuLinks.map((item) => (
          <MobileMenuItem
            key={item.title}
            href={item.href}
            title={item.title}
            isMenuOpen={isMenuOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;

const MobileMenuItem = ({
  isMenuOpen,
  href,
  title,
}: {
  isMenuOpen: boolean;
  href: string;
  title: string;
}) => (
  <a
    href={href}
    className={clsx(
      "block px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800 transition-all duration-200 rounded-md",
      {
        "translate-x-0 opacity-100": isMenuOpen,
        "-translate-x-4 opacity-0": !isMenuOpen,
      }
    )}
  >
    {title}
  </a>
);
