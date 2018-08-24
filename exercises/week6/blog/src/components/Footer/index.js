import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const Footer = () => {

  const styles = {
    textAlign: 'center',
    height: "235px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '2px solid #dddddd',
    marginTop: '20px',
  }

  const styles2 = {
  }

    return (
      <div style={styles}>
        <div style={styles2}>
          <span className="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
        <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-facebook fa-stack-1x fa-inverse" aria-hidden="true"></i>
        </span>
      
        <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-github fa-stack-1x fa-inverse" aria-hidden="true"></i>
        </span>
        
          <h6>Copyright <span><i class="fa fa-copyright"></i></span> Your Website 2018</h6>
        </div>
      </div>
    );
}

export default Footer;