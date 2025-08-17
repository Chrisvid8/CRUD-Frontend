import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("authenticated", "true");
      onLogin();
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>

        {/* Info Box for HR/Employer */}
        <div className="login-info">
          <p><strong>Demo Access:</strong></p>
          <p>Password: <span className="highlight">admin123</span></p>
          <small>(Use this to test the system)</small>
        </div>

        {/* First-time Notice */}
        <div className="login-note">
          <p>
            <strong>Note:</strong> If this is your first time using the site, 
            it may take <span className="highlight">20–30 seconds</span> to load 
            data due to server startup. Once loaded, speed will be normal.
          </p>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="login-input"
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
