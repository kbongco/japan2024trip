import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import close icon
import './NavBar.scss';
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="chbi-jpn-nav">
        <p className="chbi-nav-text">Chibi Japan Viz</p>

        {/* Hamburger Icon */}
        <FontAwesomeIcon 
          icon={menuOpen ? faTimes : faBars} 
          className="chbi-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
      />

        {/* Desktop Nav Items (Always visible on large screens) */}
        <div className="chbi-nav-text-display">
          <p className="chbi-nav-text-desktop">Stats</p>
          <p className="chbi-nav-text-desktop">Food</p>
          <p className="chbi-nav-text-desktop">Transport</p>
          <p className="chbi-nav-text-desktop">Fun</p>
        </div>

        {/* Mobile Menu (Only visible when menuOpen is true) */}
        {menuOpen && (
          <div className="chbi-nav-mobile-menu">
            <p>Stats</p>
            <p>Food</p>
            <p>Transport</p>
            <p>Fun</p>
          </div>
        )}
      </div>
    </>
  );
}
