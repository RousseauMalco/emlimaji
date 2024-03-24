import { csvRead } from "./csvRead";

export function FileUpload({onRead}) {
    function handleFileChange(e) {
        console.log(e);
        console.log('file changed!', e)
        var reader = new FileReader();
        reader.readAsText( e.target.files[0], 'UTF-8');
        reader.onload = (evt) => {
            console.log('File read successful.', evt.target.result);
            onRead(csvRead(evt.target.result));
        }
        reader.onerror = (evt) => {
          console.log('File read failed.', evt);
        }
      }
    
    return (
        <div>
         <h1>
           <input 
           type="file" 
           accept=".csv"
           onChange={handleFileChange} />
         </h1>   
         </div>
    ); 
 }

