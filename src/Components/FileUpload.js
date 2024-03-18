import { csvRead } from "./csvRead";
/**
 * This file is not currently in use.
 */
export function FileUpload() {
    function handleFileChange(e) {
        // var names = [];
        console.log('file changed!', e);
        var reader = new FileReader();
        reader.readAsText( e.target.files[0], 'UTF-8');
        reader.onload = (evt) => {
          console.log('success!!', evt.target.result); // this is where a call to csvRead will go 
          csvRead(evt.target.result);
        }
        reader.onerror = (evt) => {
          console.log('sad news', evt);
        }
    
    
        return (
            <div>
                <h1>
                    <input 
                    type="file" 
                    accept=".csv"
                    onChange={handleFileChange} 
                    />
                </h1>
            </div>
        );
    }
}
