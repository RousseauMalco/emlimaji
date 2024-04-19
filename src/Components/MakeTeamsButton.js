import { pairPreferences } from "./GroupRandomize";
import React, { useState, useRef } from 'react';



export function MakeTeamsButton({inputNames,tot_group, option}) {
    const [groups, setGroups] = useState([]);
    // const [isFrozen, setFreeze] = useState(false)

    function handleClick() {
      var button = document.getElementById("teamButton")
      console.log(inputNames);
      if (inputNames.size > 0) {
        button.innerHTML = "Reshuffle again!";
        var teams = pairPreferences({people:inputNames,input:tot_group, option:option});
        setGroups(teams);
      }
    }

    const dragItem = useRef(null);
    function dragStart(e, memberID){ 
      console.log('dragStart called');
      dragItem.current = memberID;
      console.log(memberID);
    };
    
    function dragOver(e) {
      e.preventDefault();
    }

    function drop(e,targetGroupIndex) {
      console.log('drop called');
      e.preventDefault();
      const draggedMember = dragItem.current;
      console.log(draggedMember); 
      const updatedGroups = [...groups];

      let originalGroupIndex;
      let originalGroup;
      updatedGroups.forEach((group, index) => {
        if (group.includes(draggedMember)) {
          originalGroupIndex = index;
          originalGroup = group;
        }
      });

      if (originalGroup) {
        updatedGroups[originalGroupIndex] = originalGroup.filter(member => member !== draggedMember);
      }

      updatedGroups[targetGroupIndex] = updatedGroups[targetGroupIndex] || [];
      updatedGroups[targetGroupIndex].push(draggedMember);

      setGroups(updatedGroups);
    }


    const freezeItem = useRef(null);

    function freezeStart(e,memberID)  {
      console.log('freeze called')
      freezeItem.current = memberID;
      console.log(freezeItem.current)
      const currentFrozenState = freezeItem.current.freeze;
      console.log(currentFrozenState)
      freezeItem.current = {
        ...freezeItem.current,
        freeze: !currentFrozenState
      };
      console.log(freezeItem.current.freeze);
      console.log(freezeItem.current)
    }


    function renderMembers(props) {
      console.log("render called")
      if(props.groups && props.groups.length > 0) {
          return (
            <div class="grid grid-cols-2">
              {
                props.groups.map((group,groupIndex) =>
                 <div class="ring-3 sm:rounded-xl bg-white m-2 relative px-20 pt-20 pb-20 shadow-xl ring-gray-900" key={groupIndex} id={`group-${groupIndex}`} onDragOver={(e) => dragOver(e)}> 
                    <div class="flex-col space-x-5" onDragOver={dragOver}
                            onDrop={(e) => drop(e,groupIndex)}>
                      {
                        group.map((member) => {
                          const textColor = member.frozen ? 'red' : 'black';
                          return (
                          <li 
                            style={{color:textColor}}
                            class="pointer-events-auto"
                            id={{member}}
                            // className={`inline-block ${member.frozen ? 'frozen' : ''}`} 
                            draggable="true" 
                            onClick={(e) => {freezeStart(e,member)}}
                            onDragStart={(e) => dragStart(e,member)}>
                            {member.name}
                          </li>

                        )
                      }
                    </div>
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
        <button class=" bg-white py-2 px-4 rounded sm:rounded-xl" id = "teamButton" onClick={handleClick} disabled={isNaN(tot_group) || tot_group === 0 || tot_group === ""}>
            Make new teams!
        </button> 
     
          {renderMembers({groups: groups})}

      </div>
    ); 
  }

  