import React from 'react';
import './Home.css';
import { TiLockClosedOutline } from "react-icons/ti";
// import { GoPlay } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";

const Home = () => {
  return (
    <div className='main-part-home'>
        <div className='home-main-part'>
        <div className='home-main'>
            <h1 className='home-head'>All Fast Food is Available at <span className='home-foodle'>Foodle</span></h1>
        <div className='home-profile'>
            <img src='https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/4554-KFC_Offers.jpg' alt='dummy-pic' className='home-image'/>
            <p className='home-para'>We Are Just A Click Away When You Crave For Delicious Fast Food</p>
        </div>
        <div className='home-buttons'>
            <div className='home-buy'>
                <TiLockClosedOutline  className='home-lock-icon'/>
                <button className='home-buy-button'>Buy Now</button>
            </div>
            <div className='home-play'>
                <button className='play-button'><IoIosPlay className='home-play-icon'/></button>
                <button className='order-button'>How To Order</button>
            </div>
        </div>
        </div>
        <div className='home-icons'>
            <div className='arrow'>
                <img src='https://silentshoresjk.com/images/arrowimg.png' alt='dummy-pic' className='home-arrow'/>
            </div>
            <div>
                <img src='https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-Images.png' alt='dummy-pic' className='home-logo'/>
            </div>
        </div>
    </div>
        <div className='home-second-part'>
            <div className='truck-icon'>
                <div className='truck-related'>
                    <FaTruckFast className='truck'/>
                </div>
                <div className='truck-para'>
                    <h2>Fast Delivery</h2>
                    <p className='truck-para-one'>The Food Will Be Delivered To Your Home Within 1-2 Hours Of Your Ordering.</p>
                </div>
            </div>

            <div className='truck-icon'>
                <div className='truck-related'>
                <LuRefreshCcw className='truck'/>
                </div>
                <div className='truck-para'>
                    <h2>Fresh Food</h2>
                    <p className='truck-para-one'>Your Food Will Be Delivered 100% Fresh To Your Home.We Do Not Deliver Stale Food.</p>
                </div>
            </div>

            <div className='truck-icon'>
                <div className='truck-related'>
                <BsFillTruckFrontFill className='truck'/>
                </div>
                <div className='truck-para'>
                    <h2>Free Delivery</h2>
                    <p className='truck-para-one'>Your Food Delivery Is Absolutely Free.No Cost Just Order And Enjoy.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;