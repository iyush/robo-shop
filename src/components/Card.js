import React, { Component } from 'react';
import './Card.css'

const Card = (props) => {
    const { image, name, id, price, value } = props.bio;
    const { onIncrement, onDecrement } = props;
    return (
        <div className="card">
            <img src={image} alt={image} />
            <div className="card-details">
                <span className="card-name"> {name} </span>
                <span className="card-price"> ${price} </span>
            </div>
            <div className="card-controls">
                <button className="btn" onClick={() => onIncrement(id)}> + </button>
                <input className="value-field" value={value} disabled />
                <button className="btn" onClick={() => onDecrement(id)}> - </button>
            </div>
        </div>
    );
}

export default Card;