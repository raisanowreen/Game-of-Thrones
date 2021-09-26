import React from 'react';
import './Cart.css';
import logo from '../../../src/images/header.png';
const Cart = (props) => {
    console.log(props.Cart);
    const {cart} = props;
    let worth = 0;
    let name = [];
    for (const cast of cart){
        worth = worth + cast.worth;
        name = name + cast.name + ', ' ;
    }
    return (
        // cart details displaying
        <div>
            <img className="logo" src={logo} alt="" />
           <h1>Cast Added: {props.cart.length}</h1>
<h1>Total Cost: ${worth}</h1>
<h1>Cast Names: {name}</h1>
        </div>
    );
};

export default Cart;