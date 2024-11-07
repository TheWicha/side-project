import Link from "next/link";
import { menuLinks } from "../../copy";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex space-x-8">
      {menuLinks.map((link) => (
        <MenuItem key={link.title} text={link.title} href={link.href} />
      ))}
    </div>
  );
};

export default DesktopMenu;

const MenuItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium relative group"
    >
      <span className="relative z-10 hover:text-blue-300">{text}</span>

      <span className="absolute inset-0 -mx-2 h-full w-[calc(100%+16px)] scale-[0.8] opacity-0 blur-md bg-blue-500/40 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
    </Link>
  );
};
