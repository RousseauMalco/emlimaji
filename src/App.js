import jimLogo from './Components/jimLogo.png';
import './App.css';
import { CSVTemplateLink } from './Components/CSVTemplateLink';
import React, { useState } from 'react';
import { FileUpload } from './Components/FileUpload';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
import { GroupCustomizeTextField } from './Components/GroupCustomizeTextField';
import { MultipleChoice } from './Components/GroupOrNumMem';

 
function App() {
  const [readData, setReadData] = useState('');
  const [tot_group, setTotGroup] = useState(4);
  const [selectedOption, setSelectedOption] = useState("Group Size");

  const handleRead = (value) => {
    setReadData(value);
  };


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
              <li><a href="#" className="text-lg rounded-xl font-semibold text-black bg-white py-1 px-20 hover:text-gray-300">Make Teams!</a></li>
              <li><a href="#" className="text-lg rounded-xl font-semibold text-black bg-white py-1 px-20 hover:text-gray-300">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Part of Screen - Body */}

      <body className = "App-body">
      <div className = "container">
        <div className = "container-left">  
          <p className="text-lg text-gray-700 font-bold" style={{ whiteSpace: 'pre-wrap' }}>No CSV? Make a CSV here! </p>
          <CSVTemplateLink url = "https://drive.google.com/drive/folders/1p5LKcEG0COVpbGXtDMCPHTgQZdOk5osD?usp=sharing" />
          <p className="text-1xl text-gray-700 font-bold">Got your CSV? Upload it here: </p>
          <FileUpload onRead={handleRead}/>
            <div class='flex flex-row m-5 mx-20'>
                <div class='grow-0 m-1'>
                    <MultipleChoice options={["Group Size","Number of groups"]} onAnswer={(option) => {setSelectedOption(option)}} > </MultipleChoice>  
                </div>
                <GroupCustomizeTextField inputSize={tot_group} onSizeChange={(newTotGroup) => setTotGroup(newTotGroup)} />
            </div>
        </div>
        <div class="vl"></div>
        <div className = "container-right">
          <MakeTeamsButton inputNames={readData} tot_group={tot_group} option ={selectedOption}/>     
        </div>
      </div>
      </body>

    </div>
  );
}

export default App;
