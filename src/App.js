import jimLogo from './Components/jimLogo.png';
import React from 'react';
import './App.css';
import { FileUploadAndRead } from './Components/FileUploadAndRead';
import { Header } from './Components/Header';
import { HeaderText } from './Components/HeaderText';
import { CSVTemplateLink } from './Components/CSVTemplateLink';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
 
function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <p2 className="text-xl font-semibold">
            <img src={jimLogo} className='logo'/>
            GroupMate 
          </p2>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Make Teams!</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Part of Screen - Body */}

      <body className = "App-body">
        <div>
            <h1>
              <HeaderText />
            </h1>
          </div> 

          <div className = "container">
            <div className = "container-left">  
              <p className="text-lg text-gray-700 font-bold" style={{ whiteSpace: 'pre-wrap' }}>[text about how our project works here] </p>
              <CSVTemplateLink url = "https://drive.google.com/drive/folders/1p5LKcEG0COVpbGXtDMCPHTgQZdOk5osD?usp=sharing" />
            </div>
            <div class="vl"></div>
            <div className = "container-right">
              <p className="text-1xl text-gray-700 font-bold">Upload a CSV to get started: </p>
              <FileUploadAndRead />
            </div>
      </div>
      </body>

    </div>
  );
}

export default App;
