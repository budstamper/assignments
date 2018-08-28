import React, { Component } from 'react';
import Navbar from '../Navbar'

class Header extends Component {

    render(){
      var position = '0'
      var color = 'transparent'
      // let mclasses = classNames({position: this.state.position}, {color: this.state.color}, {backgroundColor: this.state.backgroundColor})
      
    return (
      <div className="headcont">
        <div className="head">
            <h1 className="title">Clean Blog</h1>
            <h3 className="subtitle">A Blog Theme by Start Bootstrap</h3>
        </div>
      </div>
    );
    }
}

export default Header;