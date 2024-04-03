import "../App.css";

import React from "react";

export function GroupCustomizeTextField({inputSize,onSizeChange}) {
  return (
    <>
      <h2> How many teams do you want to create? </h2>
      <form >
        <textarea
          value={inputSize}
          onChange={(e) => onSizeChange(e.target.value)}
        />
      </form>
    </>
  );
}


