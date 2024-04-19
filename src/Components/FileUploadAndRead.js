// import React, { useState } from 'react';
// import { FileUpload } from './FileUpload';
// import { MakeTeamsButton } from './MakeTeamsButton';
// import { GroupCustomizeTextField } from './GroupCustomizeTextField';
// import { MultipleChoice } from './GroupOrNumMem';

// export function FileUploadAndRead() {
//     const [readData, setReadData] = useState('');
//     const [tot_group, setTotGroup] = useState(4);
//     const [selectedOption, setSelectedOption] = useState("Group Size");

//     const handleRead = (value) => {
//         setReadData(value);
//     };

//     return (
//         <div>   
//             <FileUpload onRead={handleRead}/>
//             <div class='flex flex-row m-5 mx-20'>
//                 <div class='grow-0 m-1'>
//                     <MultipleChoice options={["Group Size","Number of groups"]} onAnswer={(option) => {setSelectedOption(option)}} > </MultipleChoice>  
//                 </div>
//                 <GroupCustomizeTextField inputSize={tot_group} onSizeChange={(newTotGroup) => setTotGroup(newTotGroup)} />
//             </div>
//             <MakeTeamsButton inputNames={readData} tot_group={tot_group} option ={selectedOption}/>     
//         </div>
//     );
// }