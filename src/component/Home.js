import React from "react";
import './Home.css';
import img from './../img/me.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = ({ theme }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle CV download
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ashenafi sahele.pdf"; // Adjust the path to your CV file
    link.download = "Ashenafi sahele.pdf"; // Change the file name as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const navigateToSocialMedia = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); // Open in a new tab
  };
  return (
    <>
      <div className={`home-content ${theme}`}>
        <div>
          <ul className={`ul ${theme}`}>
            <li onClick={() => navigateToSocialMedia('https://www.facebook.com/ashnafi.sahele')} className="social-button">
                <FaFacebookF />
              </li>
            <li onClick={() => navigateToSocialMedia('https://twitter.com/p_a_b_l_o_15')} className="social-button"><FaTwitter /></li>
            <li onClick={() => navigateToSocialMedia('https://www.linkedin.com/in/Ashenafisahele')} className="social-button"><FaLinkedinIn /></li>
            <li onClick={() => navigateToSocialMedia('https://www.instagram.com/p_a_b_l._.o')} className="social-button"><FaInstagram /></li>
            <li onClick={() => navigateToSocialMedia('https://t.me/Ashenafisahele')} className="social-button"><FaTelegram /></li>
          </ul>
        </div>
        <div className={`img ${theme}`}>
          <img src={img} alt="Me" />
        </div>
        <div>
          <h1>Hello, my name is</h1>
          <p>Ashenafi Sahele, I am a frontend developer certified in advanced React from Meta. I am a dedicated young man based in Ethiopia.</p>
          <button className={`btn ${theme}`} onClick={() => navigate('/about')}>About Me</button>
          <button className={`btn ${theme}`} onClick={downloadCV}>CV</button>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Ashenafi Sahele. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;