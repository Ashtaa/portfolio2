import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import './Header.css'; // Ensure you have relevant styles for your header

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={`header ${theme}`}>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/contact">
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