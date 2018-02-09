import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import ImgCarousel from './Components/ImgCarousel'
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImgCarousel />
        <Footer />
      </div>
    );
  }
}

export default App;
