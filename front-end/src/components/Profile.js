import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../profile.css';

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    batch: '',
    rollno: '',
    phone: '',
    field: '',
    about: '',
    profilePicture: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const callProfilePage = async () => {
    try {
      const res = await fetch('/profile', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
      formData.append('rollno', userData.rollno);
      formData.append('phone', userData.phone);
      formData.append('field', userData.field);
      formData.append('about', userData.about);
      formData.append('facebook', userData.facebook);
      formData.append('linkedin', userData.linkedin);
      formData.append('instagram', userData.instagram);

      // Send only the file in the form data
      if (userData.profilePicture instanceof File) {
        formData.set('profilePicture', userData.profilePicture);
      }

      const res = await fetch('/profile', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
        body: formData,
      });

      if (res.status === 200) {
        const data = await res.json();
        setUserData(data);
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
    setProfileImage(URL.createObjectURL(file));
    setUserData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
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
                          src={
                            userData.profilePicture ||
                            'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
                          }
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
                            value={userData.rollno}
                            name="rollno"
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
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <label className="labels">About</label>
                          <textarea
                            className="form-control"
                            placeholder="About"
                            value={userData.about}
                            name="about"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="labels">Facebook</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Facebook"
                            value={userData.facebook}
                            name="facebook"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="labels">LinkedIn</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="LinkedIn"
                            value={userData.linkedin}
                            name="linkedin"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="labels">Instagram</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Instagram"
                            value={userData.instagram}
                            name="instagram"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="mt-5 text-right">
                        {!isEditing ? (
                          <button
                            className="btn btn-primary profile-edit-btn"
                            onClick={handleEditButtonClick}
                          >
                            Edit Profile
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-primary profile-edit-btn"
                              onClick={handleSaveButtonClick}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-secondary profile-edit-btn"
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </button>
                          </>
                        )}
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
