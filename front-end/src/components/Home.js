import React from 'react';
import '../home.css'; // Import the CSS file for styling
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Welcome to UIT Student HUB</h1>
        <p className="home-text">UIT Student Hub will let students connect with each other and through this web they can connect with various skilled people and help people out.</p>

        <NavLink to="/login">
          <button className="home-button">Get Started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
