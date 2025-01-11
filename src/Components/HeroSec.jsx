import React from 'react'
import './HeroSec.css'
import Profile from '../assets/profile.jpg'
const HeroSec = () => {
  return (
    <div style={{ backgroundColor: '#333333 ' }}>
      <div className="hero-extension" style={{paddingTop: '5%', paddingBottom: '5%'}}>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Shishir Chapagain</h1>
          <div className="animated-text">
            I'm a <span></span>
          </div>
          <p>
            I specialize in building modern, user-friendly websites and applications. Let's create something amazing together.
          </p>
          <button className="cta-button">Let’s get started →</button>
        </div>
        <div className="hero-image">
          <img
            src={Profile}
            alt="Your Profile"
            className="profile-image"
          />
        </div>
      </section>
      </div>
      
    </div>
  );
}

export default HeroSec
