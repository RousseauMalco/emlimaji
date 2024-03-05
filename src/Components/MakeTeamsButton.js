import { csvRead } from "./csvRead";

export function MakeTeamsButton() {
    function handleClick() {
      alert('You clicked me!');
    }
    
    function handleFileChange(e) {
      console.log('file changed!', e)
      var reader = new FileReader();
      reader.readAsText( e.target.files[0], 'UTF-8');
      reader.onload = (evt) => {
        console.log('success!!', evt.target.result); // this is where a call to csvRead will go 
      }
      reader.onerror = (evt) => {
        console.log('sad news', evt);
      }
    }

    return (
     <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleClick}>
          {/* csvRead("csvTest.csv") */}
        </button> 
      </div>
    ); 
  }