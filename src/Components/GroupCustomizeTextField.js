import "../App.css";

import React from "react";

export function GroupCustomizeTextField({title,inputSize,onSizeChange}) {
  return (
    <div>
      <form >
        <textarea
          value={inputSize}
          onChange={(e) => onSizeChange(e.target.value)}
        />
      </form>
    </div>
  );
}


