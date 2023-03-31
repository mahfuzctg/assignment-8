import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <div>
        <nav className='header'>
        <div><h3>Programming Boss</h3></div>
        <div className='item'>
        <a href="/Shop">Shop</a>
        <a href="/Order">Order</a>
        <a href="/Login">Login</a>
        <a href="/Inventory">Inventory</a>
        </div>
    </nav>
        </div>
    );
};

export default Header;