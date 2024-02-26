var fs = require("fs")
let papaparse = require('papaparse')
let file = "csvTest.csv"

var content = fs.readFileSync(file, "utf-8")

var rows;
papaparse.parse(content, {
    download:false,
    header: false,
    delimiter: ",",
    complete: function(results) {
        //console.log("Finished:", results.data);
        rows = results.data;
    }
});
console.log("console log: ",rows);
console.log(rows[1][1])

// for(var i=0; i < rows.length-1; i++){
//     console.log(papaparse.parse(rows))
// }