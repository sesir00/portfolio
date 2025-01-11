import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
          <div className="nav-brand">
            <div className="logo">
              {/* <span className="logo-text">Shishir Chapagain</span> */}
              <div className="logo-shine"></div>
            </div>
          </div>

          <div className="nav-links">
            <a href="#" className="nav-link">
              <span>Home</span>
              <div className="link-effect"></div>
            </a>
            <a href="#" className="nav-link">
              <span>About me</span>
              <div className="link-effect"></div>
            </a>
            <a href="#skill" className="nav-link">
              <span>Skills</span>
              <div className="link-effect"></div>
            </a>
            <a href="#project" className="nav-link">
              <span>Projects</span>
              <div className="link-effect"></div>
            </a>
            <a href="#contactform" className="nav-link">
              <span>Contact</span>
              <div className="link-effect"></div>
            </a>
          </div>

          <div className="nav-actions">
            <button className="action-btn">
              <div className="btn-text">Lets talk</div>
              <div className="btn-effect"></div>
            </button>
          </div>

          <button className="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-header">
            <div className="logo">
              <span className="logo-text">Premium</span>
            </div>
            <button className="close-menu">
              <span className="close-icon"></span>
            </button>
          </div>
          <div className="menu-links">
            <a href="#" className="menu-link active">
              <span>Home</span>
            </a>
            <a href="#" className="menu-link">
              <span>Products</span>
            </a>
            <a href="#" className="menu-link">
              <span>Services</span>
            </a>
            <a href="#" className="menu-link">
              <span>About</span>
            </a>
            <a href="#" className="menu-link">
              <span>Contact</span>
            </a>
          </div>
          <div className="menu-footer">
            <button className="mobile-action-btn">
              <span>Sign In</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
