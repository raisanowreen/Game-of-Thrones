import React from 'react';
import './Header.css'
import logo from '../../../src/images/header.png'
const Header = () => {
    return (
        <div className="header">
           <img className="logo" src={logo} alt="" />
           <h1>Make a Game of Thrones team </h1> 
           <h1>If you think this has a happy ending, you haven't been paying attention.</h1>
           <h1>Total Budget: 250 Million</h1>
        </div>
    );
};

export default Header;