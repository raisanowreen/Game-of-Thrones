import React from 'react';
import './Cart.css';
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
        <div>
           <h1>Cast Added:{props.cart.length}</h1>
<h1>Total Cost: ${worth}</h1>
<h1>Cast Names: {name}</h1>
        </div>
    );
};

export default Cart;