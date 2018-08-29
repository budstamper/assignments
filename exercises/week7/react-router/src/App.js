import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Nav from './nav'
import Footer from './footer'
import Home from './home'
import About from './about'
import Services from './services'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Nav />
        <Switch className="content">
          <Route exact path='/' component={ Home } />
          <Route exact path='/About' component={ About } />
          <Route exact path='/Services' component={ Services } />
        </Switch>  
        <Footer />
      </div>
    );
  }
}

export default App;
