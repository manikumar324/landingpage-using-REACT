import React from 'react';
import './Deliver.css';
import { useState } from 'react';
import DeliverCard from '../DeliverCard/DeliverCard';

const Deliver = () => {
    const[data,setData]=useState([
        {
            image:"https://th.bing.com/th/id/R.990b39418d0ed6edab2def5b0c059b86?rik=jASy4cqFBKxlgQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fJunk-Food-Hamburger.png&ehk=YuGzwuLfqMnAkcW67dQtLkWxezZJpY82EnPMRnwSTvs%3d&risl=&pid=ImgRaw&r=0",
            name:"Chicken Burger"
        },
        {
            image:"https://th.bing.com/th/id/OIP.1WD3pFM9y8wR57Hokq5ijAHaEt?rs=1&pid=ImgDetMain",
            name:"Chicken Pizza"
        },
        {
            image:"https://th.bing.com/th/id/OIP.XdihQ7Thq9GyMBW6AtFkygHaIA?rs=1&pid=ImgDetMain",
            name:"French Fries"
        }
    ])
  return (
    <div className='deliver-main-head'>
       <div className='deliver-one'>
            <h1 className='deliver-head'>Best <span className='deliver-span'>Delivered</span> Categories</h1>
            <p className='deliver-para'>Here are Some Of Our Best Distributed Categories. If you Won't You Can Order From Here.</p>
       </div>
        <ul className='deliver-main'>
                {data.map((item, index) => ( 
                    <DeliverCard key={index} data={item} /> 
                ))}
        </ul>
    </div>
  )
}

export default Deliver;