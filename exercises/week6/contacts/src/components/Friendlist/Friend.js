import React from 'react';

const Friend = (props) =>{

    const styles = {
        textAlign: "center",
        padding: "20px"

    }
    
    return(
        <div style={styles}>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
        </div>
    )
}

export default Friend