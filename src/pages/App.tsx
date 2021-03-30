import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../styles/App.scss';
import { useApi } from '../hooks/useApi';

function App() {
  const [works] = useApi('works');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {works && works.map((work, index) => <p key={index}>{work.slug}</p>)}
      </header>
    </div>
  );
}

export default App;
