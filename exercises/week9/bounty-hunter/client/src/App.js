import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            price: 0,
            fname: "",
            lname: "",
            type: "",
            bounties: []
        }
    }

    componentDidMount() {
        axios.get('/bounty').then(res => {
          console.log(res)
            this.setState({
                bounties: res.data
            })
        })
    }



    render() {

        const handleChange = (e) =>{
            console.log('changing')
            this.setState({
              [e.target.name]: e.target.value,
            })
          }

    const handlePost = () => {
        console.log("posting")
        const data = {
            price: this.state.price,
            fname: this.state.fname,
            lname: this.state.lname,
            type: this.state.type,
        }
        console.log(data)
        axios.post('/bounty', data).then(res => {
            console.log(res)
              this.setState({
                  bounties: res.data
              })
          })
        }

        const handleChangePrice = (e,id) => {
            var holder = this.state.bounties
            holder[id].priceHolder = e.target.value
            this.setState({
                bounties: holder
            })
        }
          
          const handlePrice = (id) => {
              console.log('Hey', id, this.state.bounties[id])
              const data = { price: Number(this.state.bounties[id].priceHolder)}
            axios.put(`bounty/${this.state.bounties[id].id}`, data).then(res => {
                console.log(res)
                  this.setState({
                      bounties: res.data
                  })
              })
          }

          const handleKill = (id) => {
              const killed = this.state.bounties[id]
              killed.living = !killed.living
            axios.put(`bounty/${this.state.bounties[id].id}`, killed).then(res => {
                console.log(res)
                  this.setState({
                      bounties: res.data
                  })
              })
          }

    const handleDelete = (index) => {
        console.log(index, this.state.bounties[index].id)
        axios.delete(`/bounty/${this.state.bounties[index].id}`).then(res => {
            console.log(res)
              this.setState({
                  bounties: res.data
              })
          })
    }

        return (
            <div>
                <input onChange={handleChange} name="price" type="number" placeholder="price"></input>
                <input onChange={handleChange} type="text" name="fname" placeholder="First Name"></input>
                <input onChange={handleChange} type="text" name="lname" placeholder="Last Name"></input>
                <input onChange={handleChange} type="text" name="type" placeholder="Type: sith/jedi"></input>
                <button onClick={handlePost}>post bounty</button>
                {this.state.bounties.map((bounty, i)=> <div>
                    <h1>{bounty.price}</h1>
                    <input onChange={(e)=>handleChangePrice(e,i)} type="number" name="bountyPrice" placeholder="Set Bounty Price"></input>
                    <button onClick={()=>handlePrice(i)}>Change price</button>
                    <p>{bounty.fname}</p>
                    <p>{bounty.lname}</p>
                    <p>{bounty.type}</p>
                    Living: <input type="checkbox" onChange={()=>handleKill(i)} checked={bounty.living}></input>
                    <button onClick={()=>handleDelete(i)}>delete</button>
                    <br></br>
                    </div>)}
            </div>
        )
    }
}

export default App