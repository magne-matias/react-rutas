import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <>  
  <Router>
      <App />
  </Router>
  </>
  ,document.getElementById('root')
);
