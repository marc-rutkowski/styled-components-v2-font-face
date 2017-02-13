import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: Pangolin;
    src: url('Pangolin-Regular.ttf') format('truetype');
  }
  html {
    font-family: Pangolin;
    background-color: red;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
