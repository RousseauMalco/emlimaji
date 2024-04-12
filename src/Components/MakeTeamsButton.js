import { pairPreferences } from "./GroupRandomize";
import React, { useState, useRef } from 'react';



export function MakeTeamsButton({inputNames,tot_group, option}) {
    const [groups, setGroups] = useState([]);

    function handleClick() {
      var button = document.getElementById("teamButton")
      console.log(inputNames);
      if (inputNames.size > 0) {
        button.innerHTML = "Reshuffle again!";
        var teams = pairPreferences({people:inputNames,input:tot_group, option:option});
        setGroups(teams);
      }
    }

    const dragItem = useRef();
    function dragStart(e, memberIndex){ 
      console.log('dragStart called');
      dragItem.current = memberIndex;};
    
    function dragOver(e) {
      console.log('dragOver called');
      e.preventDefault();
    }

    function drop(e,targetGroupIndex) {
      console.log('drop called');
      e.preventDefault();
      const draggedMemberIndex = dragItem.current;
      const draggedMember = groups.flatMap(group => group)[draggedMemberIndex];
      const updatedGroups = [...groups];
      // Remove the dragged member from its original group
      const originalGroupIndex = updatedGroups.findIndex(group => group.includes(draggedMember));
      const originalGroup = updatedGroups[originalGroupIndex];
      originalGroup.splice(originalGroup.indexOf(draggedMember), 1);

      // Add the dragged member to the target group
      updatedGroups[targetGroupIndex].push(draggedMember);

      setGroups(updatedGroups);
      renderMembers({groups:groups});
    }

    function renderMembers(props) {
      console.log("render called")
      if(props.groups && props.groups.length > 0) {
          return (
            <div class="grid grid-cols-2">
              {
                props.groups.map((group,groupIndex) =>
                 <div class="ring-3 sm:rounded-xl relative bg-white m-2 px-10 pt-10 pb-10 shadow-xl ring-gray-900/5" key={groupIndex} id={`group-${groupIndex}`} onDragOver={(e) => dragOver(e)}> 
                    <ul class="x-flex-col x-space-x-5">
                      {group.map((member,memberIndex) => <li key={memberIndex} id={`member-${memberIndex}`} class="x-inline-block" draggable="true" onDragStart={(e) => dragStart(e, memberIndex)} onDragOver={dragOver}
                            onDrop={(e) => drop(e,groupIndex)}> {member}
                      </li>)}
                    </ul>
                 </div>
                )
              }
            </div>
          );
      } else {
          return(
              <p>
                  No teams yet
              </p>
          );
      }
    }

    return (
     <div>
        <button class="sm:rounded-xl" id = "teamButton" onClick={handleClick} disabled={isNaN(tot_group) || tot_group === 0 || tot_group === ""}>
            Make new teams!

        </button> 
     
          {renderMembers({groups: groups})}

      </div>
    ); 
  }

  