import React, { Component } from 'react';

class HitCard extends Component {
    constructor(props){
        super(props)
        console.log(
            props
        )
        this.state = {
            bi: props.img,
            name: props.name,
        }
    }
  render() {
      const styles = {
        width: '300px',
        margin: "10px",
        height: '600px',
        backgroundImage: `url('${this.state.bi}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    }

      const styles2 = {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#0000FF80",
        height: "50px",
        width: "100%",
        bottom: "0",
        color: "orange",
        alignItems: "center"
      }

    return (
      <div style={styles}>
          <div style={styles2}>{this.state.name}</div>
      </div>
    );
  }
}

export default HitCard;