import React, { Component } from 'react';


class Form extends Component {
    constructor (){
        super() 

        this.state = {
            myName: '',
            age: '',
            height: '',
            weight: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form>
                <input type="text" name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}  />
                <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
                <input type="text" name='height' placeholder='Height' value={this.state.height} onChange={this.handleChange} />
                <input type="text" name='weight' placeholder='Weight' value={this.state.weight} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;