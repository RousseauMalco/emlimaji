import jimLogo from './Components/jimLogo.png';
import React from 'react';
import './App.css';
import { FileUploadAndRead } from './Components/FileUploadAndRead';
import { Header } from './Components/Header';
import { HeaderText } from './Components/HeaderText';
import { CSVTemplateLink } from './Components/CSVTemplateLink';
 
function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-xl font-semibold">
            <img src={jimLogo} className='logo'/>
            GroupMate 
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Make Teams!</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <header className="App-header">
        <div>
          <h1>
            <HeaderText />
          </h1>
          {/* <div className='half-1'></div> */}
          {/* <div className='half-2'></div> */}
        </div>

        <h2>
            <FileUploadAndRead />
            <CSVTemplateLink url = "https://drive.google.com/drive/folders/1p5LKcEG0COVpbGXtDMCPHTgQZdOk5osD?usp=sharing" />
        </h2>

      </header>

    </div>
  );
}



export default App;
