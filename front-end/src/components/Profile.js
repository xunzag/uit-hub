import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    batch: '',
    rollNo: '',
    phone: '',
    field: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const callProfilePage = async () => {
    try {
      const res = await fetch('/profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate('../login');
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = async () => {
    try {
      const res = await fetch('/profile', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userData)
      });

      if (res.status === 200) {
        setIsEditing(false);
        
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="form-wrapper">
            <div className="input-wrapper">
              <h1 className="form-title">Profile</h1>
              <form method="GET" className="register-form" id="register-form">
                <div className="form-group">
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
                    value={userData.name}
                    disabled={!isEditing}
                    onChange={handleInputChange}
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
                    value={userData.email}
                    disabled={!isEditing}
                    onChange={handleInputChange}
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
                    value={userData.batch}
                    disabled={!isEditing}
                    onChange={handleInputChange}
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
                    value={userData.rollNo}
                    disabled={!isEditing}
                    onChange={handleInputChange}
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
                    value={userData.phone}
                    disabled={!isEditing}
                    onChange={handleInputChange}
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
                    placeholder="Field"
                    className="form-input"
                    value={userData.field}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  {isEditing ? (
                    <button type="button" className="save-button" onClick={handleSaveButtonClick}>
                      Save
                    </button>
                  ) : (
                    <button type="button" className="edit-button" onClick={handleEditButtonClick}>
                      Edit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
