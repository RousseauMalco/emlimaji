import jimLogo from './Components/jimLogo.png';
import './App.css';
import { CSVTemplateLink } from './Components/CSVTemplateLink';
import React, { useState } from 'react';
import { FileUpload } from './Components/FileUpload';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
import { GroupCustomizeTextField } from './Components/GroupCustomizeTextField';
import { MultipleChoice } from './Components/GroupOrNumMem';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

 
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

      <header className="bg-gray-800 text-white py-3">
        <div className="container mx-auto flex items-center space-x-4"> 
          <img src={jimLogo} className='mx-0 object-cover h-10 w-10'/>
          <p2 className="text-3xl text-left m-0 font-semibold">Welcome to GroupMate </p2>
          <Popup trigger=
          {<button class="text-lg rounded-xl space-x-1 font-semibold text-black bg-white py-1 px-20">About</button>}
          modal nested>
                {
                    close => (
                        <div className='modal'>
                        <div className='content'>
                          <h2>Meet the team</h2>
                          <div className="Emma">
                            <img className="h-96 w-96 rounded-full object-cover object-center shadow-blue-gray-900/50"
                              src={'EmmaEmlimaji.jpeg'} />
                          </div>
                          <div>
                            <button onClick={() => close()}>
                              Close
                            </button>
                          </div>
                          </div>
                          </div>
                      )}
              </Popup>
              <Popup trigger={<button class="text-lg rounded-xl space-x-1 font-semibold text-black bg-white py-1 px-20">Instructions</button>}
                        modal nested>
                          {
                            close => (
                              <div className='modal'>
                                <div className='content'>
                                  <h2>GroupMate CSV Instructions</h2>
                                  <p>Make a copy of the template.</p>
                                  <p>The template contains questions for students’ names, who they want to work with, and who they do not want to work with.</p>
                                  <p>Please tell your students to not misspell their name and the names of the people they put in the form.</p>
                                  <p>If you are ready to send out the form, send out the google form via link or share through email.</p>
                                  <p>Once you have the responses, go to the Responses section and press the <strong>.</strong></p>
                                  <p>Then, download the response via CSV format.</p>
                                  <p>You should have your CSV file ready to go!</p>
                                </div>
                                <div>
                                  <button onClick={() => close()}>
                                    Close
                                  </button>
                                </div>
                              </div>
                            )}
                        </Popup>
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
