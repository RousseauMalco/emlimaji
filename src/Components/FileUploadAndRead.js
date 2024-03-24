import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { MakeTeamsButton } from './MakeTeamsButton';

export function FileUploadAndRead() {
    const [readData, setReadData] = useState('');

    const handleRead = (value) => {
        setReadData(value);
    };
    
    return (
        <div>
          <FileUpload onRead={handleRead} />
          < MakeTeamsButton inputNames={readData}/>
        </div>
    );
}