import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../people.css'; // Import custom CSS file for styling

const People = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (response.status === 401) {
          // Unauthorized, navigate to login
          navigate('/login');
        } else {
          const data = await response.json();
          setUsers(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="people-container">
      <h1>Connect</h1>
      <div className="card-container">
        {users.map(user => (
          <div key={user._id} className="card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Batch: {user.batch}</p>
            <p>Roll No: {user.rollno}</p>
            <p>Phone: {user.phone}</p>
            <p>Field: {user.field}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
