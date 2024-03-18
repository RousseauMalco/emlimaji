import { csvRead } from "./csvRead";
import { groupRandomizer } from "./GroupRandomize";
import { GroupContainer } from "./GroupContainer";
// import React from 'react';

export function MakeTeamsButton() {
    var names = [];
    var team = "test";
    function handleClick() {
      alert('Generating teams...');
    }
    
    function handleFileChange(e) {
      // if(e.type == "csv"){
        console.log('file changed!', e)
        var reader = new FileReader();
        reader.readAsText( e.target.files[0], 'UTF-8');
        reader.onload = (evt) => {
          console.log('File read successful.', evt.target.result);
          names = csvRead(evt.target.result);
        }
        reader.onerror = (evt) => {
          console.log('File read failed.', evt);
        }
      // }
    }

    function handleClick() {
      var groups = groupRandomizer(names);
      // team = "test";
      const arrayDataItems = groups.map((group) => <li>{group}</li>);
      for (var i = 0; i < groups.length; i++) {
        GroupContainer(groups[i]);
      }
    }

    return (
     <div>
      <h1>
        <input 
        type="file" 
        accept=".csv"
        onChange={handleFileChange} />
      </h1>
      <p>
        <button onClick={handleClick}>
            Make new teams!
            {/* {team} */}
          </button> 
      </p> 
      <p>
        {/* {team} */}
      </p>
      </div>
       
    ); 
  }