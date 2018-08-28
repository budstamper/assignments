import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      tl: "black",
      tr: "black",
      bl: "black",
      br: "black",
      stylesr: "none",
      styles1r: "none",
      styles2r: "none",
      styles3r: "none",
    }
  }

  smallTimeBtn = () => {
    this.setState(prevState => {
      if(prevState.tl === "black"){
      return {
        tl: "white",
      tr: "white",
      bl: "white",
      br: "white",
      }
    }else{
      return {
        tl: "black",
      tr: "black",
      bl: "black",
      br: "black",
      styles1r: "initial",
      }
    }
    })
  }

  partyBtn = () => {
    this.setState(prevState => {
      return {
        tl: "purple",
      tr: "purple",
      styles2r: "initial",
      }
    })
  }

  proBtn1 = () => {
    this.setState(prevState => {
      return{
        bl: "blue",
      }
    })
  }

  proBtn2 = () => {
    this.setState(prevState => {
      return{
        br: "blue",
      styles3r: "initial",
      }
    })
  }

  bigTimeBtn1 = () => {
    this.setState({tl: "green"})
  }

  bigTimeBtn2 = () => {
    this.setState({tr: "green"})
  }

  bigTimeBtn3 = () => {
    this.setState({bl: "green"})
  }

  bigTimeBtn4 = () => {
    this.setState({br: "green"})
  }

  render(){
    const styles = {
      display: this.state.stylesr
  }
  const styles2 = {
    display: this.state.styles1r
}
const styles3 = {
  display: this.state.styles2r
}
const styles4 = {
  display: this.state.styles3r
}
const tl = {
  backgroundColor: this.state.tl,
}
const tr = {
  backgroundColor: this.state.tr,
}
const bl = {
  backgroundColor: this.state.bl,
}
const br = {
  backgroundColor: this.state.br,
}
    return (
      <div className="container">
        <div style={tl} className="sa"></div>
        <div style={tr} className="sb"></div>
        <div style={bl} className="sc"></div>
        <div style={br} className="sd"></div>
        <div className="buttons">
        <button onClick={this.smallTimeBtn}>1</button>
        <button style={styles2} onClick={this.partyBtn}>2</button>
        <button style={styles3} onClick={this.proBtn1}>3</button>
        <button style={styles3} onClick={this.proBtn2}>4</button>
        <button style={styles4} onClick={this.bigTimeBtn1}>5</button>
        <button style={styles4} onClick={this.bigTimeBtn2}>6</button>
        <button style={styles4} onClick={this.bigTimeBtn3}>7</button>
        <button style={styles4} onClick={this.bigTimeBtn4}>8</button>
        </div>
       
      </div>
    )
  }
}

export default App;