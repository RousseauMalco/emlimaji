import { csvRead } from "./csvRead";

export function MakeTeamsButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        csvRead("csvTest.csv")
      </button>
    );
  }