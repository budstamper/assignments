import React from 'react'
import { connect } from 'react-redux'
import { start, reset, lap } from '../redux'

var tick;

const Controls = props => {

    const handleStart = () =>{
        clearInterval(tick)
        props.start()
        tick = setInterval(props.start, 1000)
    }

    const handleStop = () => {
        clearInterval(tick)
    }

    const handleReset = () => {
        clearInterval(tick)
        props.reset()
    }

    return (
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={props.lap}>Lap</button>
        </div>
    )
}

export default connect(null, { start, reset, lap })(Controls)