import "../App.css";

import React from "react";

export function GroupCustomizeTextField({inputSize,onSizeChange}) {
  return (
    <>
      <h2> Preferred group size OR # of groups: </h2>
      <form >
        <textarea
          value={inputSize}
          onChange={(e) => onSizeChange(e.target.value)}
        />
      </form>
    </>
  );
}


