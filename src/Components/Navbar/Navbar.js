import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='main-nav'>
        <nav className='nav-main'>
          <div className='navbar-toggle'>
          <h2 className='nav-head'>Foodle</h2>
          <button className='nav-toggle' onClick={toggleNav}>
            ☰
          </button>
          </div>
          <div className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
            <div className='nav-heads'>
              <a href='#Home'>Home</a>
              <a href='#Offer'>Offer</a>
              <a href='#Service'>Service</a>
              <a href='#Menu'>Menu</a>
              <a href='#AboutUs'>About Us</a>
            </div>
            <div className='nav-end'>
              <button className='set-login'>Log in</button>
              <button className='set-signup'>Sign Up</button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;
