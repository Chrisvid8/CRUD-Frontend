import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin123') {
      localStorage.setItem('authenticated', 'true');
      onLogin();
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <h2>Admin Login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="login-input"
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}