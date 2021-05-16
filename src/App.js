import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './pages/Header'
// import About from './pages/About


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/skills" component={Header} />
          <Route exact path="/projects" component={Header} />
          <Route exact path="/progress" component={Header} />
          <Route exact path="/resume" component={Header} />
          <Route exact path="/socials" component={Header} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
