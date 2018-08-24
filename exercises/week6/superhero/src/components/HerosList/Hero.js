import React from 'react'

const Hero = (props) =>{

    const styles = {
        width: "30%",
        margin: "25px",
        textAlign: "center",
        fontSize: "2em"
    }

    return(
        <div style={styles}>
            <img src={props.hero.image} alt="" onClick={props.hero.say}></img>
            <div onClick={props.hero.say}>Name: {props.hero.name}</div>
        </div>
    )
}

export default Hero