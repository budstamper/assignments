import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      bc: 'white'
    }
  }
  componentDidMount(){
    axios.get("http://www.colr.org/json/color/random").then(response =>{
      console.log(response)
      this.setState({bc: `#${response.data.colors[0].hex}`})
    }).catch(err =>{console.log(err)})
  }
  render() {

    const styles = {
      backgroundColor: this.state.bc,
      height: "100vh",
      width: '100vw',
      fontSize: "200px",
    }

    return (
      <div style={styles}>
      </div>
    );
  }
}

export default App;
