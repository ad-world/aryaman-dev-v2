import './App.css';
import React from 'react'
import Header from './pages/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>
    </Router>


  );
}

export default App;
