import React from 'react';

const Item = (props) => {

    const styles = {
        height: "300px",
        textAlign: "center",
        color: "Orange",
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        fontSize: "0.8em"
    }


    return <div style={styles}><h3>{props.name}</h3><h3>{props.price}</h3></div>
}


export default Item;