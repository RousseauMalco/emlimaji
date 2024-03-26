import jimLogo from './Components/jimLogo.png';
import React from 'react';
import './App.css';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
import { FileUpload} from './Components/FileUpload';
import { FileUploadAndRead } from './Components/FileUploadAndRead';
import { Header } from './Components/Header';
import { HeaderText } from './Components/HeaderText';
import { GroupCustomizeTextField } from './Components/GroupCustomizeTextField';
 
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <header className="App-header">
        <div>
          <img src={jimLogo}/>
          <h1>
            <HeaderText />
          </h1>
        </div>
        <div>
            <FileUploadAndRead />
        </div>
      </header>
    </div>
  );
}



export default App;
