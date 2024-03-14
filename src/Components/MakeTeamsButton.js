import { csvRead } from "./csvRead";
import { groupRandomizer } from "./GroupRandomize";

export function MakeTeamsButton() {
    var names = [];
    function handleClick() {
      alert('Generating teams...');
    }
    
    function handleFileChange(e) {
      console.log('file changed!', e)
      var reader = new FileReader();
      reader.readAsText( e.target.files[0], 'UTF-8');
      reader.onload = (evt) => {
        console.log('success!!', evt.target.result); // this is where a call to csvRead will go 
        names = csvRead(evt.target.result);
      }
      reader.onerror = (evt) => {
        console.log('sad news', evt);
      }
    }

    function handleClick() {
      groupRandomizer(names);
    }

    return (
     <div>
      <h1>
        <input type="file" onChange={handleFileChange} />
      </h1>
      <p>
        <button onClick={handleClick}>
            Make new teams!
          </button> 
      </p> 
      </div>
       
    ); 
  }