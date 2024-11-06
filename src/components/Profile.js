import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [originalUser, setOriginalUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUser({
          name: response.data.name,
          email: response.data.email,
        });
        setOriginalUser({
          name: response.data.name,
          email: response.data.email,
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setOriginalUser(user); 
    alert(`Updated Name: ${user.name}  Updated Email: ${user.email}`);
  };

  if (loading) return <Loader />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name || "Loading..."}</p>
        <p><strong>Email:</strong> {user.email || "Loading..."}</p>
      </div>
      <form onSubmit={handleSubmit} className="profile-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
