import React from 'react';
import xundawg from "../images/xundawg.jpeg";
import aboutbg from "../images/bg.jpg";
import { NavLink } from 'react-router-dom';
import '../about.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';


export const About = () => {
  return (
    <div className="about-container">
      <section className="about-section" style={{ backgroundImage: `url(${aboutbg})` }}>
        <div className="about-content">
          <div className="about-form-wrapper">
            <div className="about-profile-pic">
              <img src={xundawg} alt="Profile-pic" className="about-profile-image" />
            </div>
          </div>
          <div className="about-info-wrapper">
            <h1 className="about-form-title">About Me</h1>
            <p className="about-info">
              Hello, my name is <strong>Farhan Ali</strong> and I am a student of 6th Semester. I created this website to let UIT students connect with each other.
              My key skills are web development, graphic design, and Python. Let's connect!
            </p>
            <div className="about-social-icons">
              <NavLink to="https://www.facebook.com/yoloplaza" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/farhan-ali-98a584206/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
              <NavLink to="https://www.instagram.com/xunzag/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to="https://github.com/xunzag" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
