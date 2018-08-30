var redux = require('redux')
var ask = require('readline-sync')


// var contacts = [{
//     name: "Tommy Oliver",
//     phone: "925-867-5309",
//     email: "thegreenranger@powerrangers.com"
// }]


// Initial State
var state = {
    contacts: [{
        name: "Tommy Oliver",
        phone: "925-867-5309",
        email: "thegreenranger@powerrangers.com"
    }]
}

function addContact(){
    var mNew = {}
    mNew.name = ask.question('Enter new contact name: ')
    mNew.phone = ask.question(`Enter ${mNew.name}'s phone number: `)
    mNew.email = ask.question(`Enter ${mNew.name}'s email: `)
    return {
        newContact: mNew,
        type: "ADD_CONTACT"
    }
}

function subtractOne(){
    var names = state.contacts.map(function(item) {
        return item['name'];
    });
    var choice = ask.keyInSelect(names, "Select a contact to delete")
    console.log(choice)
    if(choice >= 0 && choice <= state.contacts.length){
        choice = state.contacts[choice].name
        choice = state.contacts.filter((a)=>{
            return a.name !== choice
        })
    return {
        newContacts: choice,
        type: "SUBTRACT_ONE"
    }
}
}


// REDUCER - Function that takes action objects and updates the store (state) appropriately
function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_CONTACT":
            return {
                contacts: prevState.contacts.push(action.newContact)
            }
        case "SUBTRACT_ONE":
            return {
                contacts: action.newContacts
            }
        default:
            return prevState
    }
}


var store = redux.createStore(reducer)

// Logging to the console the condition of your current store (state)
store.subscribe(function(){
    console.log(store.getState())
})

// this.setState({ count: prevState.count + 1 })
store.dispatch(addContact())
store.dispatch(subtractOne())
// console.log(state.contacts.map(function(item) {
//     return item['name'];
// }))