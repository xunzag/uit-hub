import React, {useState} from 'react';
import signpic from "../images/signup.png";
import signupBackground from "../images/bg.jpg";
import "../signup.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    batch: "",
    rollNo: "",
    phone: "",
    field: "",
    password: "",
    cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }

  const PostDATA = async (e) => {
    e.preventDefault();
    const { name, email, batch, rollNo, phone, field, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        batch,
        rollno: rollNo, // Updated field name
        phone,
        field, // Updated field name
        password,
        cpassword
      })
    });
      
      const data = await res.json();

      if(res.status === 422 || !data) {
        window.alert("Invalid Registration")
        console.log("Invalid Registration")

      } else {
        window.alert("Registration Succesfull")
        console.log("Registration Succesfull")

        navigate("../login");
      }

  }


  return (

    
    <section className="signup" style={{ backgroundImage: `url(${signupBackground})` }}>
      <div className="container mt-5">
        <div className="signup-content">
          <div className="form-wrapper">
            <div className="input-wrapper">
              <h1 className="form-title">Sign Up</h1>
              <form method='POST' className="register-form" id="register-form">
                
                <div className="form-group1">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
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
                      value={user.email}
                      onChange={handleInputs}
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
                      value={user.batch}
                      onChange={handleInputs}
                      placeholder="Batch"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rollNo">
                      <i className="zmdi zmdi-assignment-account"></i>
                    </label>
                    <input
                      name="rollNo"
                      type="text"
                      id="rollNo"
                      autoComplete="off"
                      value={user.rollNo}
                      onChange={handleInputs}
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
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Phone"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="field">
                      <i className="zmdi zmdi-case"></i>
                    </label>
                    <input
                      type="text"
                      name="field"
                      id="field"
                      autoComplete="off"
                      value={user.field}
                      onChange={handleInputs}
                      placeholder="Field"
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
                      value={user.password}
                      onChange={handleInputs}
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
                      name="cpassword"
                      id="confirm-password"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Confirm Password"
                      className="form-input"
                    />
                  </div>
                  <div className="centered button">
                  <button type="submit" onClick={PostDATA}>Submit</button>

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
