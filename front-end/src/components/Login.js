import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();
  
  const [email,setEmail] = useState('');
  const[password,setPassword] = useState('')

    const loginUser = async (e) => {
      e.preventDefault();

      const res = await fetch('/signin' ,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      })

      const data = res.json();

      if(res.status === 400 || !data) {
        window.alert("Invalid Credentials")
      } else {
        window.alert("Login Succesfull")

        navigate("../profile");
      }

    }
 

  return (
    <div id='login'>
      <section className="login">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="form-wrapper">
              <div className="input-wrapper">
                <h1 className="form-title">Login</h1>
                <form method='POST' className="login-form" id="login-form">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="form-input"
                    />
                    <label htmlFor="password" className="input-icon">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                  </div>
                  <div className="centered">
                    <button onClick={loginUser}>Login</button>
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
