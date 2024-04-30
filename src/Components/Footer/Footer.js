import React from 'react';
import './Footer.css';
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-main-head'>
            <h1 className='footer-head-one'>Fooodish</h1>
            <p className='footer-head-one-half'>Continue Foodish 2024 all rights reserved</p>
            <h1 className='footer-head-two'>Follow Us On</h1>
            <div className='social-icons'>
                <a href=''><FaPinterest /></a>
                <a href=''><FaInstagram /></a>
                <a href=''><FaTwitter /></a>
                <a href=''><FaFacebook /></a>
            </div>
        </div>
        <div className='footer-head-two-links'>
            <h1 className='footer-head-two'>Menu</h1>
            <a href=''>Home</a>
            <a href=''>Offers</a>
            <a href=''>Services</a>
            <a href=''>About Us</a>
        </div>
        <div className='footer-head-three-links'>
            <h1 className='footer-head-three'>Information</h1>
            <a href=''>Menu</a>
            <a href=''>Quality</a>
            <a href=''>Make a Choice</a>
            <a href=''>Salad With Vegetables</a>
            <a href=''>Fast Delivery</a>
            <a href=''>Subscribe</a>
        </div>
        <div className='footer-head-four-links'>
            <h1 className='footer-head-four'>Contact</h1>
            <a href=''> +123 456 789</a>
            <a href=''>Explore</a>
            <a href=''>info@Foodish.Com</a>
            <a href=''>1245, New York, USA</a>
        </div>
    </div>
  )
}

export default Footer;