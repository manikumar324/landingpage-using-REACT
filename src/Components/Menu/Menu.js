import React from 'react';
import './Menu.css';
// import { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';

const Menu = () => {
  const value=[
    {
      image:"https://th.bing.com/th/id/R.63698cc97cc5c4fe1d1ce5dddcaac706?rik=19xJWmE1imMFog&riu=http%3a%2f%2ftrentapizza.co.uk%2fwp-content%2fuploads%2f2016%2f07%2fBuffalo-Chicken-Burger.jpg&ehk=BVBG0sEaYZL43o1vFYn1wOIJeiw%2fnBXyQgEctHI3xU0%3d&risl=&pid=ImgRaw&r=0",
      name:"Chicken Burger",
      rating:160,
      price:"$3.50",
    },
    {
      image:"https://th.bing.com/th/id/OIP.1WD3pFM9y8wR57Hokq5ijAHaEt?rs=1&pid=ImgDetMain",
      name:"Chicken Pizza",
      rating:142,
      price:"$4.20",
    },
    {
      image:"https://www.thespruceeats.com/thmb/35SXVVtZrx9zpOiLoSaFbRQJepc=/2048x1365/filters:fill(auto,1)/southern-oven-fried-chicken-3058647-5_preview-5b0ec6ecba61770036491ed7.jpeg",
      name:"Chicken Fry",
      rating:123,
      price:"$5.00",
    },
    {
      image:"https://www.blondelish.com/wp-content/uploads/2018/08/Best-Grilled-Cheese-Sandwich-Recipe-15-770x963.jpg",
      name:"Grill Sandwich",
      rating:112,
      price:"$4.80",
    },
    {
      image:"https://i4.hurimg.com/i/hurriyet/75/750x422/6112804b7152d8281c4b30e7.jpg",
      name:"Taco Traifi",
      rating:152,
      price:"$3.63",
    },
    {
      image:"https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/10/Spicy-Ramen-Recipe1.jpg",
      name:"Noodle's Ramen",
      rating:163,
      price:"$6.50",
    }
  ]
  return (
    <div>
      <div className='menu-main'>
        <div className='menu-main-head'>
          <h1>Our <span className='menu-span'>Regular</span> Menu</h1>
          <p className='menu-para'>There Are Our Regular Menus.You Can Order Anything You Like.</p>
        </div>
        <div>
          <button className='menu-button'>See All</button>
        </div>
      </div>
      <ul className='menu-mainlist'>
        {value.map((item,index)=>(
          <MenuCard data={item}/>
        ))}
      </ul>
    </div>
  )
}

export default Menu;