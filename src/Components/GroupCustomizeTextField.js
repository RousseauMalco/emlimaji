import "../App.css";

import React from "react";

export function GroupCustomizeTextField({title,inputSize,onSizeChange}) {
  return (
    <>
      <h2> {title} </h2>
      <form >
        <textarea
          value={inputSize}
          onChange={(e) => onSizeChange(e.target.value)}
        />
      </form>
    </>
  );
}


