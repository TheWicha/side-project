import { heroContent } from "@/app/copy";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {heroContent.title}
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
          {heroContent.slogan}
        </p>
        <div className="mt-5 sm:mt-8">
          <Link href="/game">
            <button className="px-8 py-3 bg-blue-950 text-white rounded-md hover:bg-blue-900 transition-colors duration-200">
              {heroContent.button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
