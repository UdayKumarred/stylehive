import React, { useState } from 'react';
import axios from 'axios';
import { api } from '../../config/apiConfig';

const Profile = () => {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handler for updating profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Example API call to update user profile
      const token = localStorage.getItem('jwt'); // Get token if using JWT
      console.log('user token',token)
      const response = await api.put('/api/users/profile/update', {
        firstName,
        lastName,
        email,
        password
      }, {
        headers: { Authorization: `Bearer ${token}` } // Send token in headers
      });

      setMessage(response.data.message || 'Profile updated successfully!');
    } catch (error) {
      setMessage('Error updating profile.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Capture input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} // Capture input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Capture input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Update Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Update Profile
          </button>
        </div>

        {/* Message display */}
        {message && (
          <div className={`p-2 ${message.includes('Error') ? 'bg-red-300' : 'bg-green-300'} text-center`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile;
