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
            <input 
            class= "block w-half mx-auto mt-2 text-md text-white border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            type="file" 
            accept=".csv"
            onChange={handleFileChange} />   
         </div>
    ); 
 }

