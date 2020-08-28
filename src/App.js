import React from 'react';
import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ToDo2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plan.Create.Do.
        </a>
        <h5>All you have ToDo2 is for you</h5>
        <ul>
          <li><input type="checkbox"/>ToDo2 item #1</li>
          <li><input type="checkbox"/>ToDo2 item #2</li>
          <li><input type="checkbox"/>ToDo2 item #3</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
