import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 ">
      <Navbar />
      <div className="max-w-7xl m-auto">
        <Hero />
        <Features />
      </div>

      <Footer />
    </div>
  );
};
export default LandingPage;
