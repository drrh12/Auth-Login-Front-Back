import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
