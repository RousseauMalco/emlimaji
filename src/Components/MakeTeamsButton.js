import { pairPreferences } from "./GroupRandomize";
import React, { useState, useRef } from 'react';

let currentUpdate = 0;

export function MakeTeamsButton({inputNames, userInput, option, numUpdates}) {
    const [groups, setGroups] = useState([]);
    let people = new Map(inputNames);

    function removeNonFrozen(oldGroups) {
      const newGroups = [];
      for (let i = 0; i < oldGroups.length; i ++) {
        const toKeep = [];
        for (let k = 0; k < oldGroups[i].length; k++) {
          let person = oldGroups[i][k];
          if (person.freeze) {
            toKeep.push(person);
            if (people.get(person.name.toLowerCase()) != null) {
              people.delete(person.name.toLowerCase());
              console.log("removing " + person.name + " from input copy");
            }
          }
        }
        newGroups.push(toKeep);
      }

      return newGroups;
    }

    function handleClick() {
      var button = document.getElementById("teamButton")
      if (inputNames.size > 0) {
        button.innerHTML = "Reshuffle!";

        let tot_groups = 0;
        let desired_size = 0;
        if (option==="Number of groups") {
            tot_groups = userInput;
            desired_size = Math.ceil(inputNames.size/tot_groups);
        } else if (option === "Group Size") {
            desired_size = userInput;
            tot_groups = Math.ceil(inputNames.size/desired_size);
        }

        let teams = [];
        if (currentUpdate !== numUpdates) {
          console.log("inside");
          currentUpdate = numUpdates;
          people = new Map(inputNames);
          let newGroups = [];

          people.forEach((person) => {
            if (person.freeze) {
              person.freeze = false;
            }
          });

          for (let i = 0; i < tot_groups; i++) {
            const group = [];
            newGroups[i] = group;
          }
          setGroups(newGroups);
          teams = pairPreferences({people:people,input_size:desired_size, groups:newGroups});
        } else {
          let newGroups = removeNonFrozen(groups);
          console.log(newGroups);
          setGroups(newGroups);
          teams = pairPreferences({people:people,input_size:desired_size, groups:newGroups});
        }

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

    function freezeStart(e,memberID)  {
      let frozen = memberID.freeze;
      if (frozen) {
        people.set(memberID.name.toLowerCase(), {name: memberID.name, like: memberID.like, 
          dislike: memberID.dislike, id: memberID.id, frozen: false});
      }
      memberID.freeze = !frozen;
      console.log("Freezing = " + !frozen);
      console.log(memberID);
    }


    function renderMembers(props) {
      console.log("render called")
      if(props.groups && props.groups.length > 0) {
          return (
            <div class="absolute grid grid-cols-2">
              {
                props.groups.map((group,groupIndex) =>
                 <div class="ring-3 sm:rounded-xl bg-white m-2 relative px-20 pt-20 pb-20 w-auto shadow-xl ring-gray-900 " key={groupIndex} id={`group-${groupIndex}`} onDragOver={(e) => dragOver(e)}> 
                    <div class="flex-col space-x-5" onDragOver={dragOver}
                            onDrop={(e) => drop(e,groupIndex)}>
                      {
                        group.map((member) => {
                          // const textColor = member.frozen ? 'red' : 'black';
                          return (
                          <button 
                            style={{color:"white"}}
                            class="pointer-events-auto inline-block bg-sky-800 hover:bg-sky-950 px-5 text-white m-2 rounded-lg font-semibold"
                            id={{member}}
                            // className={`inline-block ${member.frozen ? 'frozen' : ''}`} 
                            draggable="true" 
                            onClick={(e) => {freezeStart(e,member)}}
                            onDragStart={(e) => dragStart(e,member)}>
                            {member.name}
                          </button>
                        )})
                      }
                    </div>
                 </div>
                )
              }
            </div>
          );
      } else if (props.groups && props.groups.length < 1){

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
        <button class=" bg-white py-2 px-4 rounded sm:rounded-xl" id = "teamButton" onClick={handleClick} disabled={isNaN(userInput) || userInput === 0 || userInput === ""}>
            Make new teams!
        </button> 
     
          {renderMembers({groups: groups})}

      </div>
    ); 
  }

  