import React from 'react'

const Person = (props) => {
return(
    <h3>{props.name}<br></br>
        Height: {props.height}<br></br>
        Mass: {props.mass}</h3>
)
}

export default Person