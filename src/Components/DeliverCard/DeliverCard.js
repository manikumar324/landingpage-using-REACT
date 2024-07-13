import React from 'react';
import './DeliverCard.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const DeliverCard = ({data}) => {
  return (
    <div className='delivercard-main'>
        <img src={data.image} alt='dummy-pic' className='delivercard-image'/>
        <h1 className='deliver-item-name'>{data.name}</h1>
        <div className='delivercard-arrow-setup'>
          <a href='' className='delivercard-link'>Order Now </a>
          <MdOutlineKeyboardArrowRight className='delivercard-arrow'/>
        </div>
    </div>
  )
}

export default DeliverCard;