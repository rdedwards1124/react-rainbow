
import './App.css';
import React, {useState} from 'react'
import ColorBlock from './ColorBlock'

function App() {
    let colors = ['red', 'orange', 'yellow', 'greenyellow', 'green', 'skyblue', 'blue', 'violet' ]
    let colorMap = colors.map((color,i)=>{
        return (
            <ColorBlock color={color} key={i} />
        )
    })
    return (
        <div className="App">
            {colorMap}
        </div>
    );
}

export default App;


/*

import logo from './logo.svg';

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

*/