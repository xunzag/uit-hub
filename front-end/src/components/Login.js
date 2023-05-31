import React from 'react';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  return (
    <div id='login'>
      <section className="login">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="form-wrapper">
              <div className="input-wrapper">
                <h1 className="form-title">Login</h1>
                <form className="login-form" id="login-form">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Email"
                      className="form-input"
                    />
                    <label htmlFor="email" className="input-icon">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Password"
                      className="form-input"
                    />
                    <label htmlFor="password" className="input-icon">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                  </div>
                  <div className="centered">
                    <button>Login</button>
                  </div>
                  <div className="centered">
                    <NavLink to="/signup" className="nav-link">
                      Create an Account
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
