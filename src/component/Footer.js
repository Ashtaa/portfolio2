import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Assuming you'll style the footer here

function Footer({theme}) {
  return (
    <footer className={`footer-container ${theme}`} >
      <div className="footer-content">
        <h3>portfolio</h3>
        <p>Stay connected on social media for any information</p>
        <div className="social-media">
          <a href="https://www.facebook.com/ashnafi.sahele" target="_blank" rel="noopener noreferrer" className={`social-link ${theme}`}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com/p_a_b_l_o_15" target="_blank" rel="noopener noreferrer" className={`social-link ${theme}`}>
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/p_a_b_l._.o" target="_blank" rel="noopener noreferrer" className={`social-link ${theme}`}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/Ashenafisahele" target="_blank" rel="noopener noreferrer" className={`social-link ${theme}`}>
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Gym Website. All rights reserved.</p>
      </div>
      
    </footer>
    
  );
}

export default Footer;

