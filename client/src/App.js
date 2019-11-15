import React from 'react';
import './css/App.css'
import { Switch, Route, Link } from 'react-router-dom'
import News from './components/News'
import Home from './components/Home'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path='/news'>
        <News />
      </Route>
    </Switch>
  );
}

export default App;
