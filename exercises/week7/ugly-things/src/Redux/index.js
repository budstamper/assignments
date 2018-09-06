// const redux = require('redux')
import { createStore } from 'redux'

// Init state
const initState = {
        url: '',
        title: '',
        description: '',
    list: [],
}


// Action 
export const addOne = () => {
    return {
        type: 'ADD_ONE'
    }
}

export const deleteIt = () => {
    return {
        type: 'DELETE'
    }
}

export const edit = () => {
    return {
        type: 'EDIT'
    }
}

// Reducer
const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'ADD_ONE':
            const thingy = {
                title: prevState.title,
                url: prevState.url,
                description: prevState.description
            }
            return {
                list: [...prevState.list, thingy],
                    title: '',
                    url: '',
                    description:'',
            }
        case "DELETE":
            return {
                time: prevState.time%1,
                laps: prevState
            }
        case "EDIT":
            return {
                time: prevState,
                laps: prevState.laps.push(prevState.time)
            }
        default:
            return prevState
    }
}


export default createStore(reducer)
