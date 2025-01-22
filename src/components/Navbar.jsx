import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './Navbar.css'; // External CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{marginLeft:'10px'}}>
        <a href="/">
          <img src="logo-txt.png" alt="logo" width="100px" />
        </a>
      </div>

      <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        ☰
      </button>

      <ul style={{color:'white'}} className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li>
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li style={{marginLeft:'10px'}}>
          <NavLink className="nav-link" to="/services" exact>
            Services
          </NavLink>
        </li>
        <li style={{marginLeft:'10px'}}>
          <NavLink className="nav-link" to="/about" exact>
            About
          </NavLink>
        </li>
        <li style={{marginRight:'10px',marginLeft:'10px'}}>
          <SignedIn>
            <Link to="/dashboard" className="dashboard-link">
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              forceRedirectUrl="/dashboard"
              className="sign-in-button"
            />
          </SignedOut>
        </li>
        <li style={{marginRight:'10px'}}>
          <SignedIn><UserButton /></SignedIn>
        
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
