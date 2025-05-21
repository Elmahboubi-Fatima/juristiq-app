import React, { useState } from 'react';
import './Dashboard.css';
import DashboardContent from './DashboardContent';
import { Link } from 'react-router-dom';
import {
  FaFolderOpen,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaMoon,
  FaSun,
  FaBell,
  FaUserCircle,
  FaBullhorn,
} from 'react-icons/fa';

function SidebarItem({ icon: Icon, label, onClick, as: Component = 'div', to }) {
  return (
    <Component 
      to={to} 
      className="sidebar-item" 
      onClick={onClick}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Icon className="icon" />
      <span>{label}</span>
    </Component>
  );
}

function Dashboard({ user = { name: 'Jannah Sanae' }, onLogout }) {
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/images/logo.jpg" alt="Logo de l'application" className="sidebar-logo" />
          <span>JuristiQ</span>
        </div>

        <nav>
          <SidebarItem icon={FaFolderOpen} label="Dashboard" />
          <SidebarItem icon={FaUsers} label="Votre compte" />
   <SidebarItem as={Link} to="/dossiers" icon={FaCalendarAlt} label="Dossiers" />
  <SidebarItem as={Link} to="/audiences" icon={FaBullhorn} label="Audience" />
  <SidebarItem as={Link} to="/rendezvous" icon={FaFileAlt} label="Rendez-vous" />
          <SidebarItem icon={FaEnvelope} label="Messages" />
          <SidebarItem icon={FaCog} label="Paramètres" />
          <SidebarItem icon={FaSignOutAlt} label="Déconnexion" onClick={onLogout} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <h1>Tableau de bord</h1>

          <div className="topbar-icons">
            <div className="search-group">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="icon-button" onClick={toggleDarkMode} title={darkMode ? "Mode clair" : "Mode sombre"}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </div>

            <div className="icon-button notification-icon" title="Notifications">
              <FaBell />
              <span className="badge">2</span>
            </div>

            <div className="icon-button" title="Messages">
              <FaEnvelope />
            </div>

            <div className="user-profile">
              <FaUserCircle className="profile-icon" />
              <span className="username">{user.name}</span>
            </div>

            <div className="icon-button" title="Paramètres">
              <FaCog />
            </div>
          </div>
        </header>

       <DashboardContent />
      </main>
    </div>
  );
}

export default Dashboard;
