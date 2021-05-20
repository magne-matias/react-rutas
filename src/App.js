import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import Service from './Service';
import About from './About';
import Contacto from './Contacto';
import NavBar from './NavBar';
import Footer from './Footer';



const App = () =>{
  return (
    <>
      <NavBar/>
      <Switch>
        <Route  exact  path="/" component={Home} />
        <Route  exact  path="/about" component={About} />
        <Route  exact  path="/service" component={Service} />
        <Route  exact  path="/contacto" component={Contacto} />
        
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
