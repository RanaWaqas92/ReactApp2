
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Login Name="waqas" Student="Student"></Login>
        {/* <img src={logo} className="Applogo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Applink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
