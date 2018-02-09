import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class Strains extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <h1>Hello from the Strains Route</h1>
        <Footer />
      </div>
    );
  }
}

export default Strains;