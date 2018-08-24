import React from 'react';

const Navbar =() => {

    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: ".5rem 1rem"

    }

    const styles2 = {
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1px",
      textTransform: "uppercase",
      listStyle: "none",
    }

    return (
      <div style={styles} className="NavContianer">
          <li style={styles2}><a>Start Bootstrap</a></li>
          <li style={styles2}><a>HOME</a></li>
          <li style={styles2}><a>ABOUT</a></li>
          <li style={styles2}><a>SAMPLE POST</a></li>
          <li style={styles2}><a>CONTACT</a></li>
      </div>
    );
}

export default Navbar;