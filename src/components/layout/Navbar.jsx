import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Campus Life", href: "#campus" },
    { name: "Admissions", href: "#admissions" },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        <span className="logo-mark">T</span>

        <span className="logo-text">
          Tulas
          <small>International School</small>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#admissions"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Apply Now
        </a>
      </nav>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;