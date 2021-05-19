import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './pages/Header'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
