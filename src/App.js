import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/header';
import Games from './Components/games';
import Details from './Components/details'
import './App.css';
import About from './Components/about';

function App() {
  return (
    <div>    
    <Router>
      <Header/>
      <Switch>
      <Route path="/" >
            <Games />
          </Route>          
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/about">
            <About />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
