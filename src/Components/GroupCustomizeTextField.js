import "../App.css";

import React from "react";

export function GroupCustomizeTextField({title,inputSize,onSizeChange}) {
  return (
  
    <form class="flex flex-row mr-4 w-20 h-10 my-4">
      <input type="number" min= "1" max="20" id="number-input" 
        aria-describedby="helper-text-explanation" class="border 
       text-gray-900 text-sm rounded-lg focus:ring-blue-500 
       focus:border-blue-500 block w-full p-2.5 bg-white border-gray-600
        dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4" 
          value={inputSize}
          onChange={(e) => onSizeChange(e.target.value)}required />
    </form>


  );
}


