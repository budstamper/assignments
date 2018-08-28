import React from 'react';

class Navbar extends React.Component{
    constructor(){
        super()

        this.state = {
          oldScroll: '0',
          position: 'initial',
            backgroundColor: 'transparent',
            color: 'white',
        }

        window.addEventListener('scroll', (event) =>{
            // console.log(window.scrollY)
            // console.log(this.state)
            // print "false" if direction is down and "true" if up
            // console.log(this.state.oldScroll > window.scrollY);
            if(this.state.oldScroll > window.scrollY && window.scrollY>=60){
              this.setState(()=>{ 
                return {oldScroll: window.scrollY, position: "sticky", backgroundColor: "white", color: "black", alignItems: 'initial',
                        display: "flex", justification: "space-between"}
              })
            } else if(this.state.oldScroll < window.scrollY || window.scrollY<=60){
              this.setState(()=>{ 
                return {oldScroll: window.scrollY, position: "initial", backgroundColor: "transparent", color: "white"}
              })
            }
          })
    }

  render(){

    const fixer = {
      backgroundColor: this.state.backgroundColor,
      position: this.state.position,
      top:'0',
      // maxWidth: '1140px',
      // paddingRight: '15px',
      // paddingLeft: '15px',
      // marginRight: 'auto',
      // marginLeft: 'auto',
      // fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
      // fontWeight: '400',
      // lineHeight: '1.5',
      // paddingTop: '20px',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'space-between',
      // padding: '.5rem 1rem',
    }

    const styles = {
            backgroundColor: this.state.backgroundColor,
            color: this.state.color,
    }

    const styles2 = {
      color: this.state.color,
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1px",
      textTransform: "uppercase",
      listStyle: "none",
    }

    return (
      <div style={fixer} className='navContainer2'>
      <div style={styles} id="nav" className="NavContainer">
          <li style={styles2}><a>Start Bootstrap</a></li>
          <li style={styles2}><a>HOME</a></li>
          <li style={styles2}><a>ABOUT</a></li>
          <li style={styles2}><a>SAMPLE POST</a></li>
          <li style={styles2}><a>CONTACT</a></li>
      </div>
      </div>
    );
}
}

export default Navbar;