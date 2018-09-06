import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

    render(){

        const styles = {
            borderRadius: '0px 10px 10px 0px',
            backgroundColor: "#ffffff90",
            height: "150px",
            width: '80%',
        }

    return (
        <div style={styles}>
            <Link to="/">Debt Clock</Link>
            <Link to="/about">Ron Swanson</Link>
            <Link to="/services">Liberty 24/7</Link>
        </div>
    );
};
}

export default Nav;