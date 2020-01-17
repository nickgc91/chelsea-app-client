import React from 'react';
import './css/App.css'
import { Switch, Route } from 'react-router-dom'
import News from './components/News'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path='/news'>
        <News />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
