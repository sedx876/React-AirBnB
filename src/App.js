import React from 'react';
import './styles/App.css';
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
    <Header />
      <Home />
    </div>
  );
}

export default App;
