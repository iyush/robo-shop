import React, { Component } from 'react';
import './Cart.css'

const paymentFinal = () => {
    return
}

const Cart = (props) => {
    let totalCost = 0;
    for (let i = 0; i < props.items.length; i++) {
        totalCost = totalCost + (props.items[i].value * props.items[i].price);
    }
    return (
        <div className="floater">
            {totalCost > 0 ?
                <div className="cart">
                    You pay $ {totalCost}
                    <a href="#" className="bill" >Buy</a>
                    <a href="#" className="reset" onClick={props.onReset}>Reset</a>
                </div>
                :
                <div></div>
            }
        </div>
    );
}
export default Cart;