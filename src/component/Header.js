import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${theme}`}>
      <div
        className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/skill" onClick={toggleMenu}>
              <FaLaptopCode /> Skills
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={toggleMenu}>
              <FaCode /> Project
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              <FaEnvelope /> Contact
            </Link>
          </li>
          <li>
            <button className="toggle-button" onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
