import logo from './logo.svg';
import React from 'react';
import './App.css';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
import { FileUpload} from './Components/FileUpload';
import { FileUploadAndRead } from './Components/FileUploadAndRead';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <h1>
            Welcome to GroupMate!
          </h1>
          <p>
            Upload a CSV to get started:
          </p>
        </div>
        <div>
            < FileUploadAndRead />
        </div>
          {/* Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </p> */}
      </header>
    </div>
  );
}

export default App;
