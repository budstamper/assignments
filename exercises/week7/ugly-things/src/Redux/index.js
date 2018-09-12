// const redux = require('redux')
import { createStore } from 'redux'

// Init state
const initState = {
    list: [],
}



// Action 
export const addOne = (data) => {
    console.log("adding One", data)
    return {
        type: 'ADD_ONE',
        data: data
    }
}

export const deleteIt = (data) => {
    return {
        type: 'DELETE',
        num: data
    }
}

export const edit = (data) => {
    console.log("edit",data)
    return {
        type: 'EDIT',
        data: data
    }
}

// Reducer
const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'ADD_ONE':
        console.log('reducerAdd', action.data)
            const thingy = {
                title: action.data.title,
                url: action.data.url,
                description: action.data.description,
                number: prevState.list.length
            }
            return {
                list: [...prevState.list, thingy]
            }
        case "DELETE":
            prevState.list.splice(action.num, action.num+1)
            return {
                list: [...prevState.list]
            }
        case "EDIT":
        console.log("editing", action.data)
        prevState.list[action.data.number] = action.data
            return {
                list: [...prevState.list]
            }
        default:
            return prevState
    }
}




export default createStore(reducer)




