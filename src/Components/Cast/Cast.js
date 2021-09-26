import React from 'react';
// external icon importing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import './Cast.css'
const Cast = (props) => {
    console.log(props);
    const {img, name, character, born, height, worth} = props.cast;
    return (
//    cast details displaying     
<div className="cast-display">
    <img src={img} alt="" />
    <h3>Name: {name}</h3>
    <h3>Character: {character}</h3>
    <h3>Born: {born}</h3>
    <h3>Height: {height}m</h3>
    <h3>Worth: ${worth}</h3>
    <button 
    onClick={() => props.handleAddToCart(props.cast)} className="purchase-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
</div>
    );
};

export default Cast;