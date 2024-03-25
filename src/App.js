import logo from './logo.svg';
import React from 'react';
import './App.css';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
import { FileUpload} from './Components/FileUpload';
import { FileUploadAndRead } from './Components/FileUploadAndRead';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
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
      </header>
    </div>
  );
}



export default App;
