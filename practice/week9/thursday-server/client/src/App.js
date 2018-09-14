import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        price: 0,
        fname: "",
        lname: "",
        type: "",
        guns: []
    }
}

componentDidMount(){
  console.log("sending get")
    axios.get("gun").then(res => {
      console.log(res)
        this.setState({
            guns: res.data
        })
    })
}

  render() {
    return (
      <div>
        {this.state.guns.map((gun, i)=><div>
                  <p>{gun.type}</p>
                </div>
        )}
      </div>
    );
  }
}

export default App;



