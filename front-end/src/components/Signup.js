import React from 'react';
import signpic from "../images/signup.png";
import signupBackground from "../images/bg.jpg";
import "../signup.css";
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <section className="signup" style={{ backgroundImage: `url(${signupBackground})` }}>
      <div className="container mt-5">
        <div className="signup-content">
          <div className="form-wrapper">
            <div className="input-wrapper">
              <h1 className="form-title">Sign Up</h1>
              <form className="register-form" id="register-form">
                
                <div className="form-group1">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      placeholder="Name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Email"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="batch">
                      <i className="zmdi zmdi-calendar"></i>
                    </label>
                    <input
                      type="text"
                      name="batch"
                      id="batch"
                      autoComplete="off"
                      placeholder="Batch"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rollNo">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </label>
                    <input
                      type="text"
                      name="rollNo"
                      id="rollNo"
                      autoComplete="off"
                      placeholder="Roll No"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="zmdi zmdi-phone"></i>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      placeholder="Phone"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="work">
                      <i className="zmdi zmdi-case"></i>
                    </label>
                    <input
                      type="text"
                      name="work"
                      id="work"
                      autoComplete="off"
                      placeholder="Work"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Password"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      autoComplete="off"
                      placeholder="Confirm Password"
                      className="form-input"
                    />
                  </div>
                <div className="centered">
                  <button>
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="image-wrapper">
              <figure><img src={signpic} alt="Signup Image" className="signup-image" />
              </figure>
              <NavLink to="/login" className="nav-link">
                  Already Registered?
                </NavLink>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
