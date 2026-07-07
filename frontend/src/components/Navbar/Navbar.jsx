import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <svg className="brand-mark" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="#d9a441" strokeWidth="1" />
            <path
              d="M20 8 L23 17 L32 17 L25 23 L28 32 L20 26 L12 32 L15 23 L8 17 L17 17 Z"
              fill="#b23a2e"
              opacity="0.85"
            />
            <circle cx="20" cy="20" r="3" fill="#f3ead4" />
          </svg>

          <span className="brand-text">
            <strong>Ganguly's Gourmet</strong>
            <span>Kolkata · Est. 1974</span>
          </span>
        </a>

        <nav className={`links ${menuOpen ? "open" : ""}`}>
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Story
          </a>

          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>

          <a href="#chefs-table" onClick={() => setMenuOpen(false)}>
            Chef's Table
          </a>

          <a href="#ambience" onClick={() => setMenuOpen(false)}>
            Ambience
          </a>

          <a href="#reserve" onClick={() => setMenuOpen(false)}>
            Reservations
          </a>
        </nav>

        <a href="#reserve" className="nav-cta">
          Reserve a Table
        </a>

        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;