import React from 'react';
import './Navbar.css';
import Info from './Info'

const Navbar = () => {
    return (
        <div className="nav">
            <Info />
            <a className="home" href="./index.html">Home</a>
        </div>
    )
}

export default Navbar;
