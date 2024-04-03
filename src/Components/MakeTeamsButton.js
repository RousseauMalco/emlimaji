import { pairPreferences } from "./GroupRandomize";
import React, { useState } from 'react';

function renderMembers(props) {
  if(props.groups && props.groups.length > 0) {
      return (
        <ul class="space-y-5">
          {
            props.groups.map((group) =>
             <li class="ring-2 sm:rounded-lg relative bg-white px-3 pt-10 pb-8 shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"> 
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

export function MakeTeamsButton({inputNames,tot_group}) {
    const [groups, setGroups] = useState([]);

    function handleClick() {
      var button = document.getElementById("teamButton")
      if(button.innerHTML === "Make new teams!"){
        button.innerHTML = "Reshuffle again!";
      }
      console.log(inputNames);
      if (inputNames.size > 0) {
        var teams = pairPreferences({people:inputNames,tot_groups:tot_group});
        setGroups(teams);
      }
    }

    return (
     <div>
        <button class="sm:rounded-lg" id = "teamButton" onClick={handleClick}>
            Make new teams!

        </button> 
      
      {renderMembers({groups: groups})}

      </div>
    ); 
  }