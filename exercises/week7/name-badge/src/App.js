import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from './Badge'

class App extends Component {
  constructor(){
    super()
    this.state = {
      fname: '',
      lname: '',
      email: '',
      birthPlace: '',
      favFood: '',
      phone: '',
      about:''
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  render() {

    const styles = {
      width: '100px',
      padding: '5px',
    }

    const styles2 = {
      display: "grid",

    }

    return (
      <div className="container">
        <div style={styles2}>
          <input onChange={this.handleChange} name="fname" type="text" placeholder="First Name"></input>
          <input onChange={this.handleChange} name="lname" type="text" placeholder="Last Name"></input>
          <input onChange={this.handleChange} name="email" type="text" placeholder="Email"></input>
          <input onChange={this.handleChange} name="birthPlace" type="text" placeholder="Place of Birth"></input>
          <input onChange={this.handleChange} name="phone" type="text" placeholder="Phone"></input>
          <input onChange={this.handleChange} name="favFood" type="text" placeholder="Favorite Food"></input>
          <input onChange={this.handleChange} name="about" type="text" placeholder="Tell us about Yourself"></input>
          <button style={styles}>Submit</button>
        </div>

        {this.state.map((a,i) =>{
          <Badge key={a.name+i}
                  />
        })}

      </div>
    );
  }
}

export default App;
