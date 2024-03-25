import logo from './logo.svg';
import React from 'react';
import './App.css';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
import { FileUpload} from './Components/FileUpload';
import { FileUploadAndRead } from './Components/FileUploadAndRead';
import { Header } from './Components/Header';
import { HeaderText } from './Components/HeaderText';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <header className="App-header">
        <div>
          <img src="Components/jimLogo.png"/>
          <h1>
            <HeaderText />
          </h1>
        </div>
        <div>
            < FileUploadAndRead />
        </div>
      </header>
    </div>
  );
}



export default App;
