import React, { Component } from 'react';
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
          <Route exact path='/Ron' component={ Ron } />
          <Route exact path='/liberty247' component={ Liberty } />
        </Switch>  
        <Footer />
      </div>
    );
  }
}

export default App;
