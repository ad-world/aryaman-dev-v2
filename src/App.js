
import "react-toggle/style.css"
import './App.css';


import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './pages/Header'


function App() {
  const theme = localStorage.getItem('theme');
  if(!theme) {
    localStorage.setItem('theme', 'light');
  } else {
    if(theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }
  


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
