import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class About extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <h1>Hello From the About Page</h1>
        <Footer />
      </div>
    );
  }
}

export default About;
