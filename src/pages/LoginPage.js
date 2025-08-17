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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-4">
      <div className="bg-white/90 shadow-2xl rounded-2xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🔐 Admin Login</h2>

        {/* Login Credentials Info */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 mb-6 text-sm text-gray-700">
          <p className="font-semibold">Demo Credentials:</p>
          <p>Username: <span className="font-mono">admin</span></p>
          <p>Password: <span className="font-mono">admin123</span></p>
        </div>

        {/* Password Input */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="mt-6 text-sm text-gray-600 bg-yellow-100 border border-yellow-300 rounded-lg p-3">
          ⚠️ <span className="font-semibold">Note:</span>  
          If you’re using the website for the first time, Render may take 
          <span className="font-semibold"> 20–30 seconds</span> to wake up the server and display the data.  
          After that, performance will be smooth with no delays.
        </div>
      </div>
    </div>
  );
}
