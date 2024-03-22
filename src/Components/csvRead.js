// import fs from 'fs';
// import papaparse from 'papaparse';

export function csvRead(csv) {
    // var fs = require("fs");
    let papaparse = require('papaparse');
    
    let file = csv;

    // var content = fs.readFileSync(file, "utf-8");
    // var content = readFileSync(csv, "utf-8");
    var rows;
    var numResponse = 0;
    var names = [];
    var preferences = [];


    papaparse.parse(file, {
        download:false,
        header: false,
        delimiter: ",",
        complete: function(results) {
            rows = results.data;
            rows.shift(); // shift removes the first element and returns that value

            for(var i=0; i < rows.length; i++){
                rows[i].shift();
                names[i] = rows[i][0];
                preferences[i] = rows[i][1];

                console.log(rows);

                // results[i][1] = names[i];
                numResponse++;
            }
        }
    });

    console.log("Name: " + names);
    console.log("Preference: " + preferences);
    console.log("Number of responses: " + numResponse);
    console.log(rows);

    return rows;

}

// csvRead("csvTest.csv")