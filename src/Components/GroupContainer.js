import "../App.css";

import React from "react";

export function GroupContainer(group) {

  /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
  const arrayDataItems = group.map((group) => <li>{group}</li>);

  return (
    <div className="container">
      <div>
        <h1>Array of Names</h1>
      </div>

      <ul>{arrayDataItems}</ul>
    </div>
  );
}