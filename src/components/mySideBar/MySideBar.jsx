import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  CreateNewFolder,
  AutoAwesomeMotion,
  People,
  Logout,
  Add,
  Close,
} from "@mui/icons-material";
import "./MySideBar.css";

const MySideBar = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleNavigation = (route) => {
    navigate(route);
    toggleDrawer(false)();
  };

  const handleLogout = () => {
    auth.signOut();
    toggleDrawer(false)();
  };

  const sideBarItems = [
    { text: "Yeni Proje", icon: <CreateNewFolder />, route: "/Yeni-Proje" },
    { text: "Tüm Projeler", icon: <AutoAwesomeMotion />, route: "/Tüm-Projeler" },
    { text: "Müşteriler", icon: <People />, route: "/Müşteriler" },
    { text: "Kullanıcı Ekle", icon: <Add />, route: "/Kayit" },
  ];

  return (
    <>
      {/* Overlay - Dışarıya tıklandığında sidebar kapanır */}
      <div
        className={`mySideBar-overlay ${open ? "mySideBar-overlay-active" : ""}`}
        onClick={toggleDrawer(false)}
      />

      {/* Sidebar */}
      <div className={`mySideBar-container ${open ? "mySideBar-open" : ""}`}>
        {/* Logo Section */}
        <div className="mySideBar-header">
          <div className="mySideBar-logo-container">
            <img
              src="/logo.png"
              alt="Kabinari Logo"
              className="mySideBar-logo"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback logo if image not found */}
            <div className="mySideBar-logo-fallback">
              <span className="mySideBar-logo-text">KABINARI</span>
            </div>
          </div>
          <button
            className="mySideBar-close-btn"
            onClick={toggleDrawer(false)}
            aria-label="Close sidebar"
          >
            <Close />
          </button>
        </div>

        {/* Menu Items - Scrollable */}
        <div className="mySideBar-menu-container">
          <nav className="mySideBar-nav">
            {sideBarItems.map((item) => (
              <button
                key={item.text}
                className="mySideBar-menu-item"
                onClick={() => handleNavigation(item.route)}
              >
                <span className="mySideBar-menu-icon">{item.icon}</span>
                <span className="mySideBar-menu-text">{item.text}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Logout Button - Fixed at bottom */}
        <div className="mySideBar-footer">
          <button className="mySideBar-logout-btn" onClick={handleLogout}>
            <span className="mySideBar-logout-icon">
              <Logout />
            </span>
            <span className="mySideBar-logout-text">Çıkış Yap</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MySideBar;
