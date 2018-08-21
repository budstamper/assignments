import React from 'react';

const Box = (props) => {
    
    const styles = {
        padding: "20px",
        textAlign: "center",
        color: props.color,
        backgroundColor: props.backgroundColor,
    }

    const info = {
        title: props.title,
        subtitle: props.title,
        information: props.information
    }

    return <div style={styles}><h1>{props.title}</h1><h3>{props.subtitle}</h3>{props.information}</div>
}

export default Box;