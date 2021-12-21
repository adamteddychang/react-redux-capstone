import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/header';
import Games from './Components/games';
import Details from './Components/details'

import './App.css';

function App() {
  return (
    <div>    
    <Router>
      <Header/>
      <Switch>
      <Route path="/" >
            <Games />
          </Route>
          <Route>
            <Details path="/details" />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
