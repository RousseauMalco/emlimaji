import { csvRead } from "./csvRead";

export function MakeTeamsButton() {
    function handleClick() {
      alert('Generating teams...');
    }
    
    function handleFileChange(e) {
      console.log('file changed!', e)
      var reader = new FileReader();
      reader.readAsText( e.target.files[0], 'UTF-8');
      reader.onload = (evt) => {
        console.log('success!!', evt.target.result); // this is where a call to csvRead will go 
        // csvRead(evt.target.readAsArrayBuffer);
      }
      reader.onerror = (evt) => {
        console.log('sad news', evt);
      }
    }

    return (
     <div>
      <h1>
        <input type="file" onChange={handleFileChange} />
      </h1>
      <p>
        <button onClick={handleClick}>
            Make new teams!
            {/* csvRead("csvTest.csv") */}
          </button> 
      </p> 
      </div>
       
    ); 
  }