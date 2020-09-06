import React from 'react';
import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Goals
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h5>Get set, get done</h5>
        <ul>
          <li><input type="checkbox"/>item 1</li>
          <li><input type="checkbox"/>item 2</li>
          <li><input type="checkbox"/>item 3</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
