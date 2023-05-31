import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo4.png"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" to="#"><img src={logo} alt="logo" srcset="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="/about">About</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="/contact">Contact</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="/login">Login</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="/signup">Registration</NavLink >
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="/profile">Profile</NavLink >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
