import { groupRandomizer } from "./GroupRandomize";
import React, { useState } from 'react';

function renderMembers(props) {
  if(props.groups && props.groups.length > 0) {
      return (
        <ul class="space-y-8">
          {
            props.groups.map((group) =>
             <li class="ring-8 sm:rounded-lg"> 
                Group: 
                <ul class="space-x-5">
                  {group.map((member) => <li class="inline-block"> {member} </li>)}
                </ul>
             </li>
            )
          }
        </ul>
      );
  } else {
      return(
          <p>
              No teams yet
          </p>
      );
  }
}

export function MakeTeamsButton({inputNames}) {
    const [groups, setGroups] = useState([]);

    function handleClick() {
      if (inputNames.length > 0) {
        var teams = groupRandomizer(inputNames)
        setGroups(teams)
      }
    }

    return (
     <div>
      <p>
        <button onClick={handleClick}>
            Make new teams!
          </button> 
        
      </p> 
      
      {renderMembers({groups: groups})}

      </div>
    ); 
  }