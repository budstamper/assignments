import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import HitList from './HitList'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <HitList />
      </div>
    );
  }
}

export default App;
