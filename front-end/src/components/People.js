import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../people.css'; // Import custom CSS file for styling

const People = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.status === 401) {
          // Unauthorized, navigate to login
          navigate('/login');
        } else {
          const data = await response.json();
          setUsers(data);
          setFilteredUsers(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [navigate]);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterUsers(query);
  };

  const filterUsers = (query) => {
    const filtered = users.filter((user) => {
      const name = user.name ? user.name.toLowerCase() : '';
      const rollno = user.rollno ? user.rollno.toLowerCase() : '';
      return name.includes(query) || rollno.includes(query);
    });

    setFilteredUsers(filtered);
  };

  return (
    <div className="people-container">
      <h1>Connect</h1>

      {/* Search Bar */}
      <div class="search-container">
  <div class="search-wrapper">
    <input
      type="text"
      placeholder="Search by name or roll no"
      value={searchQuery}
      onChange={handleSearch}
      class="search-bar"
    />
    <i class="fa fa-search search-icon"></i>
  </div>
</div>

      <div className="card-container">
        {users.length === 0 ? (
          <p>Loading users...</p>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user._id} className="card" onClick={() => openModal(user)}>
              <div className="card-content">
                <h3 className="card-name">{user.name}</h3>
                <p className="card-email">Email: {user.email}</p>
                <p className="card-batch">Batch: {user.batch}</p>
                <p className="card-rollno">Roll No: {user.rollno}</p>
                <p className="card-field">Field: {user.field}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{selectedUser.name}</h2>
              <span className="modal-close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Batch:</strong> {selectedUser.batch}
              </p>
              <p>
                <strong>Roll No:</strong> {selectedUser.rollno}
              </p>
              <p>
                <strong>Field:</strong> {selectedUser.field}
              </p>
              <p>
                <strong>About:</strong> {selectedUser.about}
              </p>
              <div className="social-icons">
                {selectedUser.facebook && (
                  <a href={selectedUser.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                )}
                {selectedUser.linkedin && (
                  <a href={selectedUser.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                )}
                {selectedUser.instagram && (
                  <a href={selectedUser.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default People;
