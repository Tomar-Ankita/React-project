import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './taskManager.css'; // ✅ Import the CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", user.username);
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again or sign up.');
    }
  };

  return (
    <div className="page-background">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input type="text"placeholder="Email or Phone"value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Sign In</button>
          <p>
            Don't have an account?{' '}
            <span className="login-link" onClick={() => navigate('/signup')}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
