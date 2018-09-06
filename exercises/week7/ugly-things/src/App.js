import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Adder from './Adder.js'
import { addOne } from './Redux'
import { connect } from 'react-redux'
import UglyThing from './UglyThing.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      url: '',
      description: '',
      list: [],
    }
  }

  store.subscribe(() => {
    // When state will be updated(in our case, when items will be fetched), 
    // we will update local component state and force component to rerender 
    // with new data.

    this.setState({
      items: store.getState().items;
    });
  });
}


  render() {

    const handleChange = (e) =>{
      console.log('chaning')
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  
  const handleSubmit = (e) =>{
    console.log('adding')
      addOne()
  }

  const uggos = this.state.list.map((a,i)=>{
    console.log('mapping')
    return <UglyThing key={a+i}
               uggo={a}/>
})

const styles3 = {
    display: 'flex',
    justification: 'space-around',
    flexWrap: 'wrap',
    margin: '10%'
}

    return (
      <div>
        <Adder />
        <div style={styles3}>
            {uggos}
        </div>
      </div>
    );
  }
}

export default connect(null, { addOne })(App)
