import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom';
import './index.css';
import App from './App';
import Strains from './Strains';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const Root = () => {
  return <BrowserRouter>
      <div>
        <Route path="/home" component={App} />
        <Route path="/strains" component={Strains} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>;
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
