import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import './App.css';

export default function App() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') === 'true');

  return authenticated ? (
    <AdminPage onLogout={() => { localStorage.removeItem('authenticated'); setAuthenticated(false); }} />
  ) : (
    <LoginPage onLogin={() => setAuthenticated(true)} />
  );
}