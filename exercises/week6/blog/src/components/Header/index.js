import React, { Component } from 'react';
import Navbar from './Navbar'

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
          position: '0',
          backgroundColor: 'transparent',
          color: 'white',
        }

        this.scroller = this.scroller.bind(this);
    }

    scroller(){
  // print "false" if direction is down and "true" if up
  console.log(this.scrollY)
  console.log(this.oldScroll > this.scrollY);
  if(this.oldScroll > this.scrollY){
    this.setState({ position: "fixed", color: 'black', backgroundColor: 'white'})
  } else if(this.oldScroll < this.scrollY || this.scrollY===0){
    this.setState({ position: '0', })
  }
  this.oldScroll = this.scrollY;
}
    render(){
      var position = '0'
      var color = 'transparent'
      let mclasses = classnames({position: this.state.position}, {color: this.state.color}, {backgroundColor: this.state.backgroundColor})
      var divStyle = {
        position: position,
        backgroundColor: color,
    }
    return (
      <div className="headcont">
        <Navbar className={mclasses} style={divStyle} onscroll={this.scroller} />
        <div className="head">
            <h1 className="title">Clean Blog</h1>
            <h3 className="subtitle">A Blog Theme by Start Bootstrap</h3>
        </div>
      </div>
    );
    }
}

export default Header;