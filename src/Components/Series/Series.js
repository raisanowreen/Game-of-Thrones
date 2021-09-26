import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cast from '../Cast/Cast';
import './Series.css'

const Series = () => {
 const [casts, setCasts] = useState([]);
 const [cart, setCart] = useState([]);

//  api fetching and showing
 useEffect(() =>{
     fetch('./casts.JSON')
     .then(res => res.json())
     .then(data => setCasts(data))
 }, []);

//  dynamic eventhandler creating
 const handleAddToCart = (cast) =>{
     const newCart = [...cart, cast];
     setCart(newCart);
 }

    return (
        <div className="series-container">
            {/* cart details */}
            <div className="cart-container">
<Cart cart={cart}></Cart>
           </div>
           {/* cast-details */}
           <div className="cast-container">
           {/* // dynamic cast details , cart details & eventhandler passing */}
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