import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Adder from './Adder.js'
import { addOne, deleteIt, edit } from './Redux'
import { connect } from 'react-redux'
import UglyThing from './UglyThing.js'
import store from './Redux'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      url: '',
      description: '',
      number: '',
      list: [],
    }

  store.subscribe(() => {
    // When state will be updated(in our case, when items will be fetched), 
    // we will update local component state and force component to rerender 
    // with new data.
    this.setState({
      list: store.getState().list
    })})
  }

  render(){

    const handleChange = (e) =>{
      console.log('changing')
      this.setState({
        [e.target.name]: e.target.value,
      })
      console.log(this.state)
    }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('adding', this.state)
      store.dispatch(addOne(this.state))
  }
  const handleEdit = (data) =>{
    store.dispatch(edit(data))
  }

  const handleDelete = (num) =>{
    store.dispatch(deleteIt(num))
  }

  const uggos = this.state.list.map((a,i)=>{
    console.log('mapping')
    return <UglyThing key={a+i}
               uggo={a}
               handleDelete={handleDelete}
               handleEdit={handleEdit}/>
})

const styles3 = {
    display: 'flex',
    justification: 'space-around',
    flexWrap: 'wrap',
    margin: '10%'
}

    return (
      <div>
        <Adder handleChange={handleChange}
               handleSubmit={handleSubmit}/>
        <div style={styles3}>
            {uggos}
        </div>
      </div>
    );
  }
}



export default connect(state=>state, { addOne, deleteIt, edit })(App)


