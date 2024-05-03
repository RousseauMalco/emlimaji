import "../App.css";

import React from "react";

export function GroupContainer(group) {

  /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
  const memberList = group.map((member) => <li>{member}</li>);

  return (
    <div class="container">
      <div>
        <h1>Array of Names</h1>
      </div>

      <ul>{memberList}</ul>
    </div>
  );
}