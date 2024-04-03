import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { MakeTeamsButton } from './MakeTeamsButton';
import { GroupCustomizeTextField } from './GroupCustomizeTextField';

export function FileUploadAndRead() {
    const [readData, setReadData] = useState('');
    const [tot_group, setTotGroup] = useState(4);
    const handleRead = (value) => {
        setReadData(value);
    };
    
    return (
        <div>
          <FileUpload onRead={handleRead} />
          <GroupCustomizeTextField inputSize={tot_group} onSizeChange={(newTotGroup) => setTotGroup(newTotGroup)} />
          < MakeTeamsButton inputNames={readData} tot_group={tot_group}/>
        </div>
    );
}