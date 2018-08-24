import React, { Component } from 'react';


class Form extends Component {
    constructor (){
        super() 

        this.state = {
            myName: '',
            names: []
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.state.names.push(this.state.myName)
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}  />
                <button>Submit</button>
                <h1>Name: {this.state.myName}</h1>
            </form>
        );
    }
}

export default Form;