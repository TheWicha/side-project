import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative group cursor-pointer">
        <Image
          alt=""
          src="/wolf-logo.png"
          width={60}
          height={60}
          className="
                px-1 sm:px-0 
                relative z-10 
                hover:opacity-90 
                transition-all duration-300
                hover:scale-105
                group-hover:shadow-blue-500/50
              "
        />
        {/* Pulsing shadow effect */}
        <div
          className="
              absolute 
              inset-0 
              -z-10
              rounded-full
              bg-blue-500/20 
              blur-xl
              group-hover:animate-pulse-slow
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              scale-110
            "
        />
        {/* Additional glow layer */}
        <div
          className="
              absolute 
              inset-0 
              -z-20
              rounded-full
              bg-blue-400/10 
              blur-2xl
              group-hover:animate-pulse-slower
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              scale-150
            "
        />
      </div>
    </Link>
  );
};
export default Logo;
