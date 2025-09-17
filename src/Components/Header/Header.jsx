import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import "./Hea.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="center">
      <div className="menu">
        {/* Logo */}
        <div className="logo">LOGO</div>

        {/* Hamburger / Close Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="material-icons">
            {menuOpen ? "close" : "menu"}
          </span>
        </div>

        {/* Nav Items */}
        <div className={`items ${menuOpen ? "open" : ""}`}>
          <div className="item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
              Home
            </NavLink>
          </div>

          <div className="item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
              About
            </NavLink>
          </div>

          <div className="item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
              Contact
            </NavLink>
          </div>

          <div className="item">
            <NavLink to="/github" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
              GitHub
            </NavLink>
          </div>

          <div className="item">
            <NavLink to="/user/:userid" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
              User
            </NavLink>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
