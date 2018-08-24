import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HerosList from './components/HerosList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    //It is important to bind the function. If you do not then the function will not work and you will receive an error when you try and run it.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }
  
  
  render() {
    return (
      <HerosList />
    );
  }
}

export default App;
