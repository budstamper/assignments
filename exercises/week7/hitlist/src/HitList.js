import React, { Component } from 'react';
import HitCard from "./HitCard.js"
import axios from 'axios'

class HitList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            url: "http://www.miracleskinnydrops.com/wp-content/uploads/2011/05/67081.jpg",
        }
    }
    componentWillMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response=>{
            console.log(response)
            this.setState({data: response.data})
        })
    }

  render() {
      const hits = this.state.data.map((hit, i)=>{
          if(hit.name !== "vegetables"){
            console.log(hit)
            return <HitCard key={hit+i}
            name={hit.name}
            img={hit.image}/>
        } else{
            return <HitCard key={hit+i}
                        name={hit.name}
                        img={this.state.url}/>
          
          }
      })

      const styles = {
        display: "flex",
        flexWrap: 'wrap',
        justification: "center",
        width: "1000px",
        paddingTop: "150px",
      }
      const styles2 = {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url("https://s-media-cache-ak0.pinimg.com/originals/ff/7c/24/ff7c24b816e2253676805c0b434d4094.jpg")'
      }

    return (
      <div style={styles2}>
        <div style={styles}>
            {hits}
        </div>
      </div>
    );
  }
}

export default HitList;
