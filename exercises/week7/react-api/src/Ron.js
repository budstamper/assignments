import React, { Component } from 'react';
import axios from 'axios'

class Ron extends Component {
    constructor(){
        super()

        this.state = {
          ron: null,
          img: null,
          ronImg: ['https://memefly.me/i/a5110ad4ac12ae4d262be94a3695b96f.jpg','https://memefly.me/i/f8b83fe8a996ee612da802bf5a132b70.jpg', 
          'https://memefly.me/i/f4fc81eb9e870e64ceabdc12b1f9602b.jpg', 'https://memefly.me/i/36209ee016b93bb8c59f72294af36f7e.jpg',
          'https://memefly.me/i/072bb3e3fb335af47f83402458842284.jpg', 'https://memefly.me/i/98424fd8e4b6f935e3a6b64b2730268c.jpg'],
          data: []
        }
    
      }
      componentDidMount(){
        axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/100").then(response =>{
            var rand1 = Math.floor(Math.random()*6)
            var rand2 = Math.floor(Math.random()*response.data.length)
          console.log(response.data, response.data.length, typeof response.data)
          this.setState({data: response.data, ron: response.data[rand2], img: this.state.ronImg[rand1]}
          )
        }).catch(err =>{
          console.log(err)
        })
      }

    render(){

        const handleRon = () =>{
            console.log('retrieving data')
            var rand1 = Math.floor(Math.random()*6)
            var rand2 = Math.floor(Math.random()*this.state.data.length)
            this.setState({
                ron: this.state.data[rand2],
                img: this.state.ronImg[rand1],
            })
        }

        let imgUrl = `${this.state.img}`

        const styles = {
            backgroundImage: `url('${imgUrl}')`,
            backgroundColor: "#80808070",
            textAlign: 'center',
            width: '75%',
            margin: '0 auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center",
            backgroundSize: 'cover',
            position: 'relative',
        }

        const styles3 = {
            fontSize: '1em',
            textAlign: 'center',
            marginTop:'15px',
        }

        const styles4 = {
            backgroundImage: 'url("http://img00.deviantart.net/4b41/i/2012/266/a/4/ron_swanson_wallpaper_by_marcusskjelseth-d5fm6nu.jpg")',
            backgroundPosition: "center",
            backgroundSize: 'cover',
            position: 'fixed',
            minWidth: '100%',
            minHeight: '100%',
            top: '0',
            left: '0',
            width: 'auto',
            height: 'auto',
            zIndex: '-100',
        }

        return (
            <div>
                <div style={styles4}></div>
                <div className='ron' style={styles} onClick={handleRon}>
                <p className="quote">{this.state.ron}</p>
                <br></br>
            </div>
            <p style={styles3}>Click the image to cycle.</p>
            </div>
        );
    };
}

export default Ron;