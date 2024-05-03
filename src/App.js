import jimLogo from './Components/jimLogo.png';
// import './App.css';
import { CSVTemplateLink } from './Components/CSVTemplateLink';
import React, { useState } from 'react';
import { FileUpload } from './Components/FileUpload';
import { MakeTeamsButton } from './Components/MakeTeamsButton';
import { GroupCustomizeTextField } from './Components/GroupCustomizeTextField';
import { MultipleChoice } from './Components/GroupOrNumMem';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Typography } from "@material-tailwind/react";
import EmmaEmlimaji from './Components/EmmaEmlimaji.png';
import Linh from './Components/Linh.png';
import Malcolm from './Components/Malcolm.png';
import Jim from './Components/Jim.png';
 
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
    
    <div class="App">  
      {/* Header */}
      <header class="bg-gray-800">
        <div class="mx-auto flex max-w-5xl items-center justify-around p-1 container-md"> 
          <img src={jimLogo} class="object-fill h-16 w-16"/>
          <p2 class="lg:text-3xl sm:text-xl text-left m-0 text-white font-semibold">Welcome to GroupMate </p2>
          <Popup trigger=
          {<button class="text-lg rounded-xl space-x-1 font-semibold hover:bg-gray-200 text-black bg-white py-1 lg:px-20 sm:px-10">About</button>}
          modal nested>
                {
                    close => (
                        <div class='modal'>
                            <h2 class="font-bold text-2xl text-sky-800 text-center mb-4">Meet the team!</h2>
                            <div class="content grid grid-cols-4 gap-3">
                              <div id="Emma">
                                <img src={EmmaEmlimaji} 
                                class="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  />
                                  <Typography as="caption" variant="small" class="mt-2 text-center font-semibold">
                                    Emma
                                  </Typography>
                              </div>
                              <div id="Linh">
                                <img class="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  src={Linh} />
                                <Typography as="caption" variant="small" class="mt-2 text-center font-semibold">
                                    Linh
                                </Typography>
                              </div>
                              <div id="Malcolm">
                                <img class="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  src={Malcolm} />
                                <Typography as="caption" variant="small" class="mt-2 text-center font-semibold">
                                    Malcolm
                                </Typography>
                              </div>
                              <div id="Jim">
                                <img class="h-50 w-50 rounded-full object-cover object-center shadow-blue-gray-900/50"
                                  src={Jim} />
                                  <Typography as="caption" variant="small" class="mt-2 text-center font-semibold">
                                    Jim
                                </Typography>
                              </div>
                          </div>
                          <button onClick={() => close() } class="bg-[#0c4a6e] outline outline-1 outline-slate-100 hover:bg-gray-400 rounded-2x1 text-white font-semibold py-1 px-10 shadow-lg mt-4">
                            Close
                          </button>                      
                        </div>
                      )}
              </Popup>
              <Popup trigger={<button class="text-lg hover:bg-gray-200 rounded-xl space-x-1 font-semibold text-black bg-white py-1 lg:px-20 sm:px-10">Instructions</button>}
                        modal nested>
                          {
                            close => (
                              <div class="modal"> 
                                  <h1 class="font-bold text-2xl text-sky-800 text-center">GroupMate Instructions</h1> 
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

      <body class="bg-[#bae6fd] min-h-screen">
        <div class="container lg:flex lg:flex-row lg:items-stretch items-center justify-center">
          <div class="container realtive items-center lg:w-2/5 sm:w-full lg:mt-5">  
            <p class="text-xl text-gray-700 mx-3 font-bold">Got your responses? Upload your CSV here: </p>
              <FileUpload onRead={handleRead}/>
            <div class="flex flex-row mt-5 mx-10">
                <div class="grow-0 m-1">
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
              <div class="lg:mt-60 sm:mt-10">
                <p class="text-xl text-gray-700 font-bold mb-2" style={{ whiteSpace: 'pre-wrap' }}>No CSV of responses?</p>
                <CSVTemplateLink url = "https://drive.google.com/drive/folders/1p5LKcEG0COVpbGXtDMCPHTgQZdOk5osD?usp=sharing" />
              </div>
          </div>
          <div class="container lg:w-3/5 sm:w-full items-center justify-center mt-5">
            <MakeTeamsButton inputNames={readData} userInput={userInput} option ={selectedOption} numUpdates={numUpdates}/>     
          </div>
        </div>
      </body>

    </div>
  );
}

export default App;
