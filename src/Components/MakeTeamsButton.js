import { input } from "@material-tailwind/react";
import { pairPreferences } from "./GroupRandomize";
import React, { useState, useRef } from 'react';
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import Popup from 'reactjs-popup';
import { LuGripVertical } from "react-icons/lu";


let currentUpdate = 0;

const IconWithStatusButton = ({ freeze, freezeChange }) => {

  const toggleStatus = () => {
    freezeChange(!freeze);
  };

  const icon = freeze
    ? <BsPinAngleFill color="e0f2fe" size={20} />
    : <BsPinAngle color="hsla(0, 0%, 70%, 0.5)" size={20} />;

  return (
    <button onClick={toggleStatus} className="pointer-events-auto inline-block px-1 py-1 text-white ml-7 m-1 rounded-lg font-semibold">
      {icon}
    </button>
  );
};

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

        if (tot_groups > inputNames.size) {
          tot_groups = inputNames.size;
        }

        let teams = [];
        if (currentUpdate !== numUpdates) {
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

      updatedGroups[targetGroupIndex].forEach((person) => {
        if (person.dislike.toLowerCase().includes(draggedMember.name.toLowerCase()) || 
        draggedMember.dislike.toLowerCase().includes(draggedMember.name.toLowerCase())) {
          <Popup trigger={draggedMember.dislike.toLowerCase().includes(draggedMember.name.toLowerCase())}
                        modal nested>
                        <p>
                          You have made a group with 2 people don't like each other.
                        </p>
                        </Popup>
        }
      });

      setGroups(updatedGroups);
    }

    function setFreeze(member, newValue) {
      member.freeze = newValue;
      setGroups([...groups]);
    }

    function renderMembers(props) {
      console.log("render called")
      if(props.groups && props.groups.length > 0) {
          return (
            <div class="grid grid-cols-2">
              {
                props.groups.map((group,groupIndex) =>
                 <div class="sm:rounded-lg bg-white align-top m-2 relative px-5 pt-5 pb-5 w-auto shadow-xl ring-gray-900 " 
                    key={groupIndex} 
                    id={`group-${groupIndex}`} 
                    onDragOver={(e) => dragOver(e)} 
                    onDrop={(e) => drop(e,groupIndex)}> 
                      {
                        group.map((member) => {
                          // const textColor = member.freeze ? 'red' : 'white';
                          return (
                            <button 
                              // style={{color:textColor}}
                              class="pointer-events-auto inline-block bg-sky-800 hover:bg-sky-950 px-2 py-1 text-white m-2 rounded-lg font-semibold"
                              id={{member}}
                              draggable="true" 
                              onDragStart={(e) => dragStart(e,member)}>
                              <LuGripVertical color="808080" size={30} className="pointer-events-auto px-1 inline-block text-white rounded-lg font-semibold" />
                              {member.name}
                              <IconWithStatusButton freeze={member.freeze} freezeChange={(newValue) => setFreeze(member, newValue)} />
                            </button>
                          
                        )})
                      }

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
        <button class="bg-white h-12 px-20 w-autd font-semibold border border-gray-400 rounded sm:rounded-xl hover:bg-gray-200 shadow-md" id = "teamButton" onClick={handleClick} disabled={isNaN(userInput) || userInput === 0 || userInput === ""}>
            Make new teams!
        </button> 
     
          {renderMembers({groups: groups})}

      </div>
    ); 
  }

  