import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            bots: '',
            chat: '',
            response: '',
            convseration: []
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
            padding: '2vh',
            textDecoration: 'none',
            color: 'green',
            fontSize: '1.5em',
        }

        const styles2={
            fontSize: '2em',
            color: 'green',
            textDecoration: 'none',
            textAlign: "center",
            height: '100vh',
            width: '100vw'
        }

        const styles3 = {
            height: '40vh',
            width: '50vw',
            backgroundColor: '#000050',
            overflowY: 'scroll',
            resize: 'none',
        }

        const styles4 = {
        }

        const styles5 = {
            width: '43vw',
        }

        const styles6 = {
            backgroundColor: "#A9A9A9"
        }

        return (
            <div style={styles2} className='diver'>
                <Link to="/"><div style={styles}>Main Menu</div></Link>
                <h4>Now Chatting with {this.state.bot}</h4>
                <div style={styles4}>
                    <textarea readonly style={styles3}>{this.state.conversation}</textarea>
                    <br></br>
                    <input style={styles5} type='text' placeholder='type something here'></input>
                    <button style={styles6}>Submit</button>
                </div>
            </div>
        )

    }

}