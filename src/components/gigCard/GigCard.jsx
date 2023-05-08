import React from 'react';
// const { useState, useEffect, useRef } = React;
import './GigCard.scss';
import { Link } from 'react-router-dom';
const GigCard = ({ item }) => {
  return (
    <Link
      to='/gig/123'
      className='link'>
      <div className='gigCard'>
        <img src={item?.img} />
        <div className='info'>
          <div className='user'>
            <img src={item?.pp} />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className='star'>
            <img
              src='/img/star.png'
              alt=''
            />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className='details'>
          <img
            src='/img/heart.png'
            alt=''
          />
          <div className='price'>
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
