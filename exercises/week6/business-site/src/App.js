import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';

const App = () => {

  const styles = {
    fontSize: "2em",
    color:"red",
    textAlign: "center"
  }

  return (
    <div>
      <Navbar />
      <div style={styles}>ULTRA-FAST-COMPUTERS</div>
      <Products />
      <Footer />
    </div>
  )
}

export default App;