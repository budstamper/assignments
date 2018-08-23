import React from 'react'

const Card = (props) =>{

    const styles = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: "25px",
        textAlign: "center",
        height: "500px",
        backgroundSize: "contain",
        color: props.color,
        fontSize: "2em"
    }

    const colorTime = {
        color: props.colorTime
    }

    return (
        <div style={styles}>
            <div>{props.place}</div>
            <div>{props.dollar}{props.price}</div>
            <div style={colorTime}>Best Season: {props.timeToGo}</div>
        </div>
    )
}

export default Card