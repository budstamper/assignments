import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Nav from './nav'
import Footer from './footer'
import Home from './home'
import Services from './services'

class About extends Component {

  render() {
    return (
      <div>
          About <br></br>
In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content. Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.
      </div>
    );
  }
}

export default About;