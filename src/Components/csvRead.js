import fs from 'fs';
import papaparse from 'papaparse';
export function csvRead(csv) {

// var fs = require("fs");
// let papaparse = require('papaparse');
let file = csv;

var content = fs.readFileSync(file, "utf-8")
var rows;
var names = [];

papaparse.parse(content, {
    download:false,
    header: false,
    delimiter: ",",
    complete: function(results) {
        rows = results.data;
        rows.shift(); // shift removes the first element and returns that value

        for(var i=0; i < rows.length; i++){
            names[i] = rows[i][1];
        }
        
    }
});

// console.log(names)

return names;

}

// csvRead("csvTest.csv")