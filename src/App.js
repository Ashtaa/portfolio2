import React, { useState, useEffect } from "react";
import { Route, Router,Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Header from "./component/Header";
import Contact from "./component/Contact";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Footer from "./component/Footer";


function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, [theme]);
  

  return (
    <div className={`App ${theme}`}>
      
      
      <Header  theme={theme} toggleTheme={toggleTheme}  />
      <Routes>
        <Route path="/" index element={<Home theme={theme} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill"  element={<Skills />} />
        <Route path="/project"   element={<Projects theme={theme}/>} />
        <Route path="contact" element={<Contact />} />
        </Routes>
     <Footer theme={theme} />
    </div>
  );
}

export default App;