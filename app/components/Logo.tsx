import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer">
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
           
              "
      />
    </Link>
  );
};
export default Logo;
