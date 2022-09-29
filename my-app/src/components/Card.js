import React from 'react';
export default function Card(props) {
  return(
    <div className="card">
        <img className='card--image' src={`../images/${props.img}`} alt="" />
        <div className="card--stats">
            <img className='card--star' src="./images/Star 1.png" alt="" />
            <span>{props.rating}</span>
            <span className='grey'>{props.review} </span>
            <span className='grey'>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From {props.price}</span> / person</p>
    </div>
  )
}
