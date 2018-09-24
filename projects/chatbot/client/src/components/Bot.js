import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Bot extends Component {
    constructor(){
        super()
        this.state = {
            bots: ['Mokky', 'Bastiat'],
            chat: ''
        }
    }

    componentDidMount(){
        console.log('here')
        axios.get('/chat').then(response=>{
            console.log(response)
        }).catch(err=>console.log(err))
    }


    render(){

        const styles={
            margin: '10%',
            padding: '5px',
            textDecoration: 'none',
            color: 'green',
            fontSize: '1.5em',
        }

        const styles2={
            fontSize: '2em',
            color: 'green',
            textDecoration: 'none',
            textAlign: "center",
            paddingTop: "10%",
            height: '100vh',
            width: '100vw',

        }

        return (
            <div style={styles2}>
                Choose a Bot to chat with!
                <Link to="/chat"><div style={styles}>Mokky</div></Link>
                <Link to="/chat"><div style={styles}>Bastiat</div></Link>
            </div>
        )
    }
}