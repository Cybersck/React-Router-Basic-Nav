import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => {
  return (
  <div>
    <Navigation />
    <Route exact path='/' component={Home}/>
    <Route path='/About' component={About}/>
    <Route path='/Contact' component={Contact}/>
    
  </div>
  )};

export default App;
