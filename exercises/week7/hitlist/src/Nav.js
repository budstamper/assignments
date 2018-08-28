import React, { Component } from 'react';

class Nav extends Component {

  render() {

    const styles = {
        backgroundColor: "#777777",
        height: "100px",
        backgroundImage: "url('https://wallpapercave.com/wp/WdigW5T.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        color: "red",
        textAlign: "center",
        paddingTop: '50px',
        fontSize: "2em",
    }


    return (
      <div style={styles}>
      DON CORLEONE'S HITLIST
      </div>
    );
  }
}

export default Nav;
