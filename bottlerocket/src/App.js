import React, { Component } from 'react';
//import './App.css';
//import { Router, Route } from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home.js';
import Restaurant from './Components/Restaurant.js';
import Lunch from './Components/Lunch.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} />
          <Route path='/restaurant' component={Restaurant} />
          <Route path='/lunch' component={Lunch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
