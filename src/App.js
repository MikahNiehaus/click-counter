import './App.css';
import React from 'react'

function App() {
  return (
    <div data-test="component-app">
    <h1 data-test="counter-display">The counter is working</h1>
    <button data-test='increment-button' >Counter</button>
    </div>
  );
}

export default App;
