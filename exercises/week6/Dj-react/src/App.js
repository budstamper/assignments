import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    
    //Your state will always be inside of a constructor
    //this.state is simply an object with key value pairs
    this.state = {
      backgroundColor: "black"
    }

    // this.addNum = this.addNum.bind(this)
  }

  //old syntax
  // addNum() {

  // }

  //This is the method you are creating to add one to your counter
  addNum = () => {
    //this.setState is the built-in method you will use ANYTIME you want to change your state.
    //prevState is the previous value of your state object
    this.setState(prevState => {
      return {
        counter: prevState.counter +1
      }
    })
  }

  subNum = () => {
    //this.setState is the built-in method you will use ANYTIME you want to change your state.
    //prevState is the previous value of your state object
    this.setState(prevState => {
      return {
        counter: prevState.counter -1
      }
    })
  }

  reset = () => {
    //this.setState is the built-in method you will use ANYTIME you want to change your state.
    //prevState is the previous value of your state object
    this.setState({counter: 0})
  }

  const styles = {
  }

  render(){
    return (
      <div className="container">
        <div className="sa"></div>
        <div className="sb"></div>
        <div className="sc"></div>
        <div className="sd"></div>
        <div className="buttons">
        <button onClick={this.addNum}>+</button>
        <button onClick={this.subNum}>-</button>
        <button onClick={this.reset}>reset</button>
        </div>
       
      </div>
    )
  }
}

export default App;