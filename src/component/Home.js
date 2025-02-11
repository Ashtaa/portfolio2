import React from "react";
import './Home.css';
import img from './../img/556+-removebg.png';

import { useNavigate } from 'react-router-dom'; 

const Home = ({ theme }) => {
  const navigate = useNavigate(); 

 
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/ashenafi-sahele.pdf`; // PUBLIC_URL ensures proper path resolution
    link.download = "ashenaf-sahele.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
 
  return (
    <>
      <div className={`home-content ${theme}`} id="home">
        <div>
         
        </div>
        <div className={`img ${theme}`} data-aos='fade-right'>
          <img src={img} alt="Me" className={`me ${theme}`} />
        </div>
        <div className="under-img">
          <h2 data-aos='fade-left'>Hello, my name is</h2>
          <p className={`home-p ${theme}`} data-aos='fade-left'><h1 data-aos="fade-up">Ashenafi <span>Sahele,</span></h1>
           I am a frontend developer
           certified in advanced React from Meta.<br />
           I am a dedicated young man based in Ethiopia.</p>
          <div data-aos='fade-right'><button className={`btn ${theme}`} onClick={() => navigate('/about')}>About Me</button>
          <button className={`btn ${theme}`} onClick={downloadCV}>CV</button></div>
        </div>
      </div>
      
    </>
  );
};

export default Home;