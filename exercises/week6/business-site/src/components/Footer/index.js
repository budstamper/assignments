import React from 'react';
import Navbar from '../Navbar';

const Footer = () => {

    const styles = {
        padding: "20px",
        textAlign: "center",
        color: "white",
        border: "3px solid green",
        backgroundColor: "#888888"

    }
    
    return (
        <div style={styles}>
            <div>We Here at Ultra-Fast Computers hope you have enjoyed your visit and you are welcome to return to view our list of products which are updated daily.</div>
            <Navbar />
        </div>
    )
}


export default Footer;