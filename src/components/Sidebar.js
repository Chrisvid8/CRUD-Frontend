import React, { useState } from 'react';
import { LayoutDashboard } from 'lucide-react';

export default function Sidebar({ onLogout }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-content">
          <h2><LayoutDashboard size={20} /> Admin Panel</h2>
        </div>
        <div className="sidebar-logout">
          <button
            onClick={() => setShowLogoutModal(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff4757',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to logout?</h3>
            <div className="modal-buttons">
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  onLogout();
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowLogoutModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}