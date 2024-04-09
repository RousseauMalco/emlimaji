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

      let originalGroupIndex;
      let originalGroup;
      updatedGroups.forEach((group, index) => {
      if (group.includes(draggedMember)) {
        originalGroupIndex = index;
        originalGroup = group;
      }
      });
      originalGroup.splice(originalGroup.indexOf(draggedMember), 1);


      updatedGroups[targetGroupIndex] = updatedGroups[targetGroupIndex] || [];
      updatedGroups[targetGroupIndex].push(draggedMember);

      setGroups(updatedGroups);
      renderMembers({groups:groups});
    }

    function renderMembers(props) {
      console.log("render called")
      if(props.groups && props.groups.length > 0) {
          return (
            <ul class="space-y-5" onDragOver={(e) => dragOver(e)}>
              {
                props.groups.map((group,groupIndex) =>
                 <li class="ring-2 sm:rounded-lg relative bg-white px-3 pt-10 pb-8 shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg" key={groupIndex} id={`group-${groupIndex}`}  > 
                    Group: 
                    <ul class="space-x-5" onDragOver={dragOver}
                            onDrop={(e) => drop(e,groupIndex)}>
                      {group.map((member,memberIndex) => <li key={memberIndex} id={`member:${memberIndex}`} class="inline-block" draggable="true" onDragStart={(e) => dragStart(e, memberIndex)} > {member}
                      </li>)}
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

    return (
     <div>
        <button class="sm:rounded-lg" id = "teamButton" onClick={handleClick} disabled={isNaN(tot_group) || tot_group === 0 || tot_group === ""}>
            Make new teams!

        </button> 
      
      {renderMembers({groups: groups})}

      </div>
    ); 
  }

  