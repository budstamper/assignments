import React, { Component } from 'react';
import './App.css';
import Badge from './components/Badge/Index'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      birthPlace: '',
      favFood: '',
      phone: '',
      about:'',
      badges:[],
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
        if(this.state.fname.length>2 && this.state.lname.length>2 && this.state.email.length>2 && this.state.birthPlace.length>2
          && this.state.favFood.length>2 && this.state.phone.length===10 && this.state.about.length>2){
          const newBadge = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            favFood: this.state.favFood,
            phone: this.state.phone,
            about:this.state.about
        }

        this.setState(prevState => ({
            fname: '',
            lname: '',
            email: '',
            birthPlace: '',
            favFood: '',
            phone: '',
            about:'',
            badges: [...prevState.badges, newBadge]
        }))
        console.log('submitted', newBadge)
        }
  }


  render() {

    const styles = {
      width: '100px',
      padding: '5px',
      margin: 30,
      textAlign: 'center',
    }

    const styles2 = {
      display: "grid",  
      margin: 30,
      gridTemplateAreas: 
      "",

    }

    const displayBadges = this.state.badges.map((a,i) =>{
      console.log('mapping', a,i);
      return <Badge key={a.fname+i}
             badge={a} />
    })

    return (
      <div className="container">
        <div style={styles2}>
          <input onChange={this.handleChange} name="fname" type="text" placeholder="First Name"></input>
          <input onChange={this.handleChange} name="lname" type="text" placeholder="Last Name"></input>
          <input onChange={this.handleChange} name="email" type="email" placeholder="Email"></input>
          <input onChange={this.handleChange} name="birthPlace" type="text" placeholder="Place of Birth"></input>
          <input onChange={this.handleChange} name="phone" type="number" placeholder="Phone"></input>
          <input onChange={this.handleChange} name="favFood" type="text" placeholder="Favorite Food"></input>
          <input onChange={this.handleChange} name="about" type="text" placeholder="Tell us about Yourself"></input>
          <button style={styles} onClick={this.handleSubmit}>Submit</button>
        </div>

        {displayBadges}

      </div>
    );
  }
}


export default App