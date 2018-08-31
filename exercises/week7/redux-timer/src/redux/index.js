// const redux = require('redux')
import { createStore } from 'redux'

// Init state
const initState = {
    time: 0,
    laps: [],
}


// Action 
export const start = () => {
    return {
        type: "START"
    }
}

export const lap = () => {
    return {
        type: "LAP"
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

// Reducer
const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "START":
            return {
                time: prevState.time+1,
                laps: prevState
            }
        case "RESET":
            return {
                time: prevState.time%1,
                laps: prevState
            }
        case "LAP":
            return {
                time: prevState,
                laps: prevState.laps.push(prevState.time)
            }
        default:
            return prevState
    }
}


export default createStore(reducer)

