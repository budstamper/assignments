import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Ron from './Ron'
import Liberty247 from './Liberty247'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Nav />
        <Switch className="content">
          <Route exact path='/' component={ Home } />
          <Route exact path='/Ron' component={ Ron } />
          <Route exact path='/Liberty247' component={ Liberty247 } />
        </Switch>  
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
