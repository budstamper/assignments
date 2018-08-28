import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Person from './person.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: []
    }

  }
  componentDidMount(){
    axios.get("https://swapi.co/api/people").then(response =>{
      console.log(response.data)
      this.setState({data: response.data.results}
      )
    }).catch(err =>{
      console.log(err)
    })
  }

  render() {
    const sw = this.state.data.map(person =>{
      return(
        <Person key={person.url}
                {...person}/>
      )
    }) 

    // {-o-} Tie fighter

    return (
      <div>
        {sw}
      </div>
    );
  }
}

export default App;
