import React from 'react';
import './styles/App.css';
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      <Home />
    </Router>
    </div>
  );
}

export default App;
