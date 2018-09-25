import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            bot: 'Mokky',
            chat: '',
            response: [],
            inResponse:[],
            conversation: 'Mokky: Hello there, do you have a moment to chat?',
        }
    }

    componentDidMount(){
        axios.get('/chat').then(response=>{
            console.log('he',response)
            var response2 = response.data.filter(a=>{return ((a.bot==='all'||a.bot==='Mokky')&&(a.hasOwnProperty('inResponse')))})
            response = response.data.filter(a=>{return (a.bot==='all'||a.bot==='Mokky')&&(a.inResponse===null||a.inResponse===undefined)})
            response = response.map(a=>a.text)
            console.log('res',response)
            console.log('inres',response2)
            this.setState(prevState=>{
                return {
                    response: [...response],
                    inResponse:[...response2],
                }
            })
        }).catch(err=>console.log(err))
    }

    render(){

        const handleChange = (e) => {
            e.preventDefault()
            console.log(this.state.chat)
            this.setState({
                chat: e.target.value,
            })
        }

        const handleSubmit = (e) =>{
            // e.preventDefault()
            if(this.state.chat[0]==='/' && this.state.chat[1]!=='/'){
                console.log('posting new response:', this.state.chat.slice(1))
                this.setState(prevstate=>{return{response:[...prevstate.response, prevstate.chat.slice(1)],chat:''}})
                axios.post('/chat', {text:this.state.chat.slice(1), bot:'Mokky'})
            } else if(this.state.chat[0]==='/' && this.state.chat[1]==='/'){
                console.log('posting conditional response:', this.state.chat.slice(2))
                this.setState(prevstate=>{return{inResponse:[...prevstate.inResponse, {text:prevstate.chat.slice(prevstate.chat.indexOf('//',2)+2),inResponse:prevstate.chat.slice(2,prevstate.chat.indexOf('//',2))}],chat:''}})
                axios.post('/chat', {text:this.state.chat.slice(this.state.chat.indexOf('//',2)+2), bot:'Mokky', inResponse:this.state.chat.slice(2,this.state.chat.indexOf('//',2))})
            }else {
                console.log(this.state.inResponse)
                var inres = this.state.inResponse.filter(a=>a.inResponse===this.state.chat)
                console.log('inres',inres)
                if(inres.length>0){
                    console.log('inres')
                    this.setState(prevState=>{
                        return {
                            conversation: prevState.conversation+'\n\nYou: '+prevState.chat+'\n\nMokky: '+inres[Math.floor(Math.random()*inres.length)].text+'\n',
                            chat: '',
                        }
                    })
                } else{
                    console.log(this.state.response[0])
                    this.setState(prevState=>{
                        return {
                            conversation: prevState.conversation+'\n\nYou: '+prevState.chat+'\n\nMokky: '+prevState.response[Math.floor(Math.random()*prevState.response.length)]+'\n',
                            chat: '',
                        }
                    })
                }
            }
        }

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
            color: 'white',
            height: '40vh',
            fontSize: '0.6em',
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
                <h4>Now Chatting with {this.state.bot}!</h4>
                <div style={styles4}>
                    <textarea readOnly style={styles3} value={this.state.conversation}></textarea>
                    <br></br>
                    <input style={styles5} onChange={handleChange} value={this.state.chat} name='chat' type='text' placeholder='type something here'></input>
                    <button style={styles6} onClick={handleSubmit}>Submit</button>
                </div>
                <p style={{fontSize:'0.8em'}}>Type a '/' to add in a bot response.</p>
                <p style={{fontSize:'0.8em'}}>To add a conditional response type '//' followed by a phrase followed by '//' followed by the bots response</p>
            </div>
        )

    }

}