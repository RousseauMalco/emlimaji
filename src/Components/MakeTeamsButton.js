import { csvRead } from "./csvRead";
import { groupRandomizer } from "./GroupRandomize";
// import { GroupContainer } from "./GroupContainer";
import React, { useState } from 'react';

// import React from 'react';

export function MakeTeamsButton() {
    const [groups, setGroups] = useState([]);
    const [names, setNames] = useState([]);
    const [memberList, setMemberList] = useState([])
    // var team = "test";
    // function handleClick() {
    //   alert('Generating teams...');
    // }
    
    function handleFileChange(e) {
      console.log(e);
      console.log('file changed!', e)
      var reader = new FileReader();
      reader.readAsText( e.target.files[0], 'UTF-8');
      reader.onload = (evt) => {
        console.log('File read successful.', evt.target.result);
        var thisNames = csvRead(evt.target.result);
        setNames(thisNames);
      }
      reader.onerror = (evt) => {
        console.log('File read failed.', evt);
      }
    }

    function handleClick() {
      var teams = groupRandomizer(names)
      setGroups(teams)
      var members = teams.map((member) => <li>{member}</li>)
      setMemberList(members);
      return (
        <div className="container">
          <div>
          </div>
          <ul>{memberList}</ul>
        </div>
      );
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
          </button> 
        
      </p> 
      {memberList}
      </div>
    ); 
  }