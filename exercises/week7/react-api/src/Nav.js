import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

    render(){

        const styles = {
            borderRadius: '0px 0px 20px 20px',
            backgroundColor: "#ffffff93",
            marginLeft: '10%',
            marginRight: '10%',
            marginBottom: '5%',
            height: "50px",
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '10px',
            alignItems: 'center',
        }

        const styles2 = {
            backgroundColor: "#ffffff00",
            textDecoration: 'none',
            textAlign: 'center',
        }

        const styles3 = {
            width: '80%',
        }

    return (
        <div style={styles}>
            <div style={styles2} ><Link style={styles2} to="/">Debt Clock</Link></div>
            <div style={styles2} ><Link style={styles2} to="/Ron">Ron Swanson</Link></div>
            <div style={styles2} ><Link style={styles2} to="/Liberty247">Liberty 24/7</Link></div>
        </div>
    );
};
}

export default Nav;