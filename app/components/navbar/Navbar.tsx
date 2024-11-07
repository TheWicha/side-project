"use client";
import React, { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800 shadow-lg shadow-slate-900/50">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <DesktopMenu />
          <MobileMenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </nav>
  );
};
export default Navbar;
