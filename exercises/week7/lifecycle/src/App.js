import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      bc: 'cyan',
    }
  }

  componentDidMount(){
    window.addEventListener("keypress", e =>{
      console.log(e)
      if(e.code === "KeyB"){
        this.setState({bc: "blue"})
      } else if(e.code === "KeyC"){
        this.setState({bc: "cyan"})
      } else if(e.code === "KeyR"){
        this.setState({bc: "red"})
      } else if(e.code === "KeyG"){
        this.setState({bc: "green"})
      } else if(e.code === "KeyY"){
        this.setState({bc: "yellow"})
      } else if(e.code === "KeyV"){
        this.setState({bc: "violet"})
      }
    })

  }

  componentWillUnmount(){
    window.removeEventListener("keypress", null)
  }



  render() {

    const styles = {
      backgroundColor: this.state.bc,
      fontSize: '200px'
    }

    return (
      <div style={styles}>
        Hello World
      </div>
    );
  }
}

export default App;
