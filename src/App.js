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
import EmmaEmlimaji from './Components/EmmaEmlimaji.png';
import { Typography } from "@material-tailwind/react";
import Linh from './Components/Linh.png';


 
function App() {
  const [readData, setReadData] = useState('');
  const [userInput, setUserInput] = useState(4);
  const [selectedOption, setSelectedOption] = useState("Group Size");
  const [numUpdates, setNumUpdates] = useState(0);
  // let numUpdates = 0;

  const handleRead = (value) => {
    setReadData(value);
    setNumUpdates(numUpdates + 1);
  };


  return (
    
    <div className="App">
      
      {/* Header */}

      <header className="bg-gray-800">
        <div className="mx-auto flex max-w-5xl items-center justify-around p-1 container-md"> 
          <img src={jimLogo} className=' object-fill h-16 w-16'/>
          <p2 className="text-3xl text-left m-0 text-white font-semibold">Welcome to GroupMate </p2>
          <Popup trigger=
          {<button class="text-lg rounded-xl space-x-1 font-semibold hover:bg-gray-200 text-black bg-white py-1 px-20">About</button>}
          modal nested>
                {
                    close => (
                        <div className='modal'>
                            <h2 className='font-semibold text-xl text-center mb-4'>Meet the team!</h2>
                            <div className='content grid grid-cols-4 gap-4'>
                              <div className="Emma">
                                <img src={EmmaEmlimaji} 
                                className="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  />
                                  <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
                                    Emma
                                  </Typography>
                              </div>
                              <div className="Linh">
                                <img className="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  src={Linh} />
                                <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
                                    Linh
                                </Typography>
                              </div>
                              <div className="Malcolm">
                                <img className="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  src={EmmaEmlimaji} />
                              </div>
                              <div className="Jim">
                                <img className="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  src={EmmaEmlimaji} />
                              </div>
                              </div>
                            <div>
                            <button onClick={() => close() } className="bg-[#0c4a6e] outline outline-1 outline-slate-100 hover:bg-gray-400 rounded-2x1 text-white font-semibold py-1 px-10 shadow-lg mt-4">
                              Close
                            </button>
                          
                          </div>
                          </div>
                      )}
              </Popup>
              <Popup trigger={<button class="text-lg  hover:bg-gray-200 rounded-xl space-x-1 font-semibold text-black bg-white py-1 px-20">Instructions</button>}
                        modal nested>
                          {
                            close => (
                              <div className='modal'> 
                                  <h1 class="font-semibold text-xl text-center">GroupMate Instructions</h1> 
                                  <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside mb-5">
                                      <li>Make a copy of the template.</li>
                                      <li>The template contains questions for students’ names, who they want to work with, and who they do not want to work with.</li>
                                      <li>Please tell your students to not misspell their name and the names of the people they put in the form.</li>
                                      <li>If you are ready to send out the form, send out the google form via link or share through email.</li>
                                      <li>Once you have the responses, go to the Responses section and press the <strong>.</strong></li>
                                      <li>Then, download the response via CSV format.</li>
                                      <li>You should have your CSV file ready to go!</li> 
                                  </ol>
                                <div>
                                  <button class="bg-[#0c4a6e] text-white outline outline-1 outline-slate-100 hover:bg-gray-400 rounded-2x1 font-semibold py-1 px-10 shadow-lg" onClick={() => close()}>Close </button>
                                </div>
                              </div>
                            )}
                        </Popup>
        </div>
      </header>

      {/* Main Part of Screen - Body */}

      <body className="bg-[#bae6fd] min-h-screen">
      <div className="container flex items-stretch align-baseline">
        <div className="container realtive items-center w-2/5 mt-5">  
          <p className="text-xl text-gray-700 mx-3 font-bold">Got your responses? Upload your CSV here: </p>
            <FileUpload onRead={handleRead}/>
          <div class='flex flex-row mt-5 mx-10'>
              <div class='grow-0 m-1'>
                  <MultipleChoice options={["Group Size","Number of groups"]} onAnswer={(option) => {
                    setNumUpdates(numUpdates + 1);
                    setSelectedOption(option);
                    }} > </MultipleChoice>  
              </div>
              <GroupCustomizeTextField inputSize={userInput} onSizeChange={(newUserInput) => {
                setNumUpdates(numUpdates + 1);
                setUserInput(newUserInput);
                }} />
            </div>
            <div class="mt-60">
              <p className="text-xl text-gray-700 font-bold mb-2" style={{ whiteSpace: 'pre-wrap' }}>No CSV of responses?</p>
              <CSVTemplateLink url = "https://drive.google.com/drive/folders/1p5LKcEG0COVpbGXtDMCPHTgQZdOk5osD?usp=sharing" />
            </div>
        </div>
        <div className = "container w-3/5 m-5">
          <MakeTeamsButton inputNames={readData} userInput={userInput} option ={selectedOption} numUpdates={numUpdates}/>     
        </div>
      </div>
      </body>

    </div>
  );
}

export default App;
