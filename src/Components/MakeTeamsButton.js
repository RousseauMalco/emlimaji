import { groupRandomizer } from "./GroupRandomize";
import React, { useState } from 'react';
import {renderMembers} from "./MemberRenderer"


export function MakeTeamsButton({inputNames}) {
    const [groups, setGroups] = useState([]);
    const [memberList, setMemberList] = useState([])

    function handleClick() {
      if (inputNames.length > 0) {
        var teams = groupRandomizer(inputNames)
        setGroups(teams)
        var members = teams.map((member) => <li>{member}</li>)
        setMemberList(members);
      }
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
      <p>
        <button onClick={handleClick}>
            Make new teams!
          </button> 
        
      </p> 
      
      {renderMembers({members: memberList})}

      </div>
    ); 
  }