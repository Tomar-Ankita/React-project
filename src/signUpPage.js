import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './taskManager.css'; 

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];// Retrieve users from localStorage or initialize with an empty array

    if (users.find((u) => u.username === username)) {
      alert('User already exists. Please login.');
      navigate('/');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created! You can now log in.');
    navigate('/');
  };

  return (
    <div className="page-background">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <input type="text" placeholder="Email or Phone" value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
          <input
            type="password"placeholder="Create Password"value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <button type="submit" className="signup-button">Create Account</button>
          <p>
            Already have an account?{' '}
            <span className="signup-link" onClick={() => navigate('/')}>
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
