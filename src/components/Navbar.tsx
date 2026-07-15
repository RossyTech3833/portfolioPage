
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Project", label: "Project" },
    { to: "/HireMe", label: "Hire me" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-20 mt-10 px-8 sm:px-16">
      <div className="flex justify-between sm:justify-center items-center sm:gap-15 py-3">
        {/* Desktop links */}
        <div className="hidden sm:flex gap-15">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-orange-400 hover:text-white uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-orange-400 hover:text-white ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-6 py-6 bg-black/90 rounded-lg mt-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-orange-400 hover:text-white uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}