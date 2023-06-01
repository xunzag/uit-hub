import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../profile.css';

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    batch: '',
    rollNo: '',
    phone: '',
    field: '',
    profilePicture: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const callProfilePage = async () => {
    try {
      const res = await fetch('/profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
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
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('batch', userData.batch);
      formData.append('rollno', userData.rollNo);
      formData.append('phone', userData.phone);
      formData.append('field', userData.field);
      formData.append('profilePicture', userData.profilePicture); // Append profile picture file
  
      const res = await fetch('/profile', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
        },
        credentials: 'include',
        body: formData, // Use formData as the request body
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
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      setUserData((prevData) => ({
        ...prevData,
        profilePicture: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="form-wrapper">
            <div className="input-wrapper">
              <h1 className="form-title">Profile</h1>
              <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                  <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                      <label htmlFor="profilePicture">
                        <img
                          className="rounded-circle mt-5"
                          width="150px"
                          src={profileImage || 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}
                          alt=""
                        />
                      </label>
                      <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                      />
                      <span className="font-weight-bold">{userData.name}</span>
                      <span className="text-black-50">{userData.email}</span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="p-3 py-5">
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <label className="labels">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            value={userData.name}
                            name="name"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="labels">Batch</label>
                          <input
                            type="text"
                            className="form-control"
                            value={userData.batch}
                            placeholder="Batch"
                            name="batch"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="labels">Roll No</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Roll No"
                            value={userData.rollNo}
                            name="rollNo"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="labels">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            value={userData.phone}
                            name="phone"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <label className="labels">Field</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Field"
                            value={userData.field}
                            name="field"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="mt-5 text-center">
                        <button
                          className="btn btn-primary profile-button"
                          type="button"
                          onClick={handleSaveButtonClick}
                        >
                          Save Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
