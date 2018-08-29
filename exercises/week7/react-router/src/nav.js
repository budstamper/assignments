import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Footer from './footer'
import Home from './home'
import About from './about'
import Services from './services'
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
      </div>
    );
  }
}

export default Nav;