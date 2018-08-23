import React from 'react';

const Pet = (props) =>{

    const styles = {
        padding: "20px",
        display: "inline-block",

    }

    return (
        <div style = {styles}>
            <div>Name: {props.name}</div>
            <div>Breed: {props.breed}</div>
        </div>
    )

}

export default Pet;