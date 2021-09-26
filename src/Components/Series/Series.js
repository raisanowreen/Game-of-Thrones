import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cast from '../Cast/Cast';
import './Series.css'
const Series = () => {
 const [casts, setCasts] = useState([]);
 const [cart, setCart] = useState([]);
 useEffect(() =>{
     fetch('./casts.JSON')
     .then(res => res.json())
     .then(data => setCasts(data))
 }, []);

 const handleAddToCart = (cast) =>{
     const newCart = [...cart, cast];
     setCart(newCart);
 }

    return (
        <div className="cast-container">
            <div className="cart-container">
<Cart cart={cart}></Cart>
           </div>
           <div className="details-container">
{
    casts.map(cast => <Cast 
    cast={cast}
    handleAddToCart = {handleAddToCart}
    ></Cast>)
}
           </div>
           
        </div>
    );
};

export default Series;