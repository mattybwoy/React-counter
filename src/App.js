import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterHook from './CounterHook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        <CounterHook />
      </header>
    </div>
  );
}

export default App;
