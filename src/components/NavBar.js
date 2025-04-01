import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={`${process.env.PUBLIC_URL}/pcv-white.png`}
          alt="Logo"
          className="logo"
        />
      </div>

      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>
        <Link to="/about" onClick={closeMenu}>
          ABOUT US
        </Link>
        <Link to="/apply" onClick={closeMenu}>
          APPLICATION
        </Link>
        <Link to="/get-involved" onClick={closeMenu}>
          GET INVOLVED
        </Link>
      </div>

      <div className="social-media">
        <a
          href="https://www.instagram.com/upennecoventure/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/instagram.png`}
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/pennclimateventures/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/facebook.png`}
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/penn-climate-ventures/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/linkedin.png`}
            alt="LinkedIn"
          />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu} aria-expanded={isOpen}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;