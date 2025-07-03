import React, { useState } from "react";
import { Menu, X } from 'lucide-react'; // if installed

function Navbar() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navItems = [
    { label: "Home", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "View Services", href: "#" },
    { label: "View Providers", href: "#" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div className="flex items-center justify-between h-[100px] px-6">
        {/* Logo */}
        <div className="text-3xl font-bold">CampusConnect</div>

        {/* Desktop nav links - hidden on small screens */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="inline-flex items-center justify-center bg-purple-800 w-[130px] h-[45px] text-white text-lg hover:bg-purple-700 transition rounded-2xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow text-lg hover:opacity-90 transition"
          >
            Sign In
          </a>
        </div>

        {/* Hamburger toggle - shown only on small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile nav menu - shown when isOpen is true */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="inline-flex items-center justify-center bg-purple-800 w-[130px] h-[45px] text-white text-lg hover:bg-purple-700 transition rounded-2xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="bg-gradient-to-r from-pink-500 to-purple-500 w-[80%] py-2 text-center rounded-lg shadow text-lg hover:opacity-90"
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
