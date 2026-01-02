import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Karthik Raj
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          <Link onClick={() => setOpen(false)} to="/about" className="block py-2">About</Link>
          <Link onClick={() => setOpen(false)} to="/skills" className="block py-2">Skills</Link>
          <Link onClick={() => setOpen(false)} to="/experience" className="block py-2">Experience</Link>
          <Link onClick={() => setOpen(false)} to="/projects" className="block py-2">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
