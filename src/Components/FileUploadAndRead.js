import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { MakeTeamsButton } from './MakeTeamsButton';
import { GroupCustomizeTextField } from './GroupCustomizeTextField';
import { MultipleChoice } from './GroupOrNumMem';

export function FileUploadAndRead() {
    const [readData, setReadData] = useState('');
    const [tot_group, setTotGroup] = useState(4);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRead = (value) => {
        setReadData(value);
    };

    return (
        <div>
          <FileUpload onRead={handleRead} />
          <MultipleChoice question="Choose an option" options={["Group Size","Number of groups"]} onAnswer={(option) => {setSelectedOption(option)}}> </MultipleChoice>
          <GroupCustomizeTextField inputSize={tot_group} onSizeChange={(newTotGroup) => setTotGroup(newTotGroup)} />
          < MakeTeamsButton inputNames={readData} tot_group={tot_group} option ={selectedOption}/>
        </div>
    );
}