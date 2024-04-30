import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='main-nav'>
        <nav className='nav-main'>
          <h2 className='nav-head'>Foodle</h2>
          <div className='nav-heads'>
            <a href=''>Home</a>
            <a href=''>Offer</a>
            <a href=''>Service</a>
            <a href=''>Menu</a>
            <a href=''>About Us</a>
          </div>
          <div className='nav-end'>
            <a href=''>Log in</a>
            <button>Sign Up</button>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;