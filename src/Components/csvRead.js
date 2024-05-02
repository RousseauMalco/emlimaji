// Reads a CSV file and prepares a data structure of people to place in groups.
export function csvRead(csv) {
    let papaparse = require('papaparse');
    let file = csv;

    var rows;
    const people = new Map();

    papaparse.parse(file, {
        download:false,
        header: false,
        delimiter: ",",
        complete: function(results) {
            rows = results.data;
            rows.shift(); // shift removes the first element and returns that value

            for(var i=0; i < rows.length; i++){
                rows[i].shift();
                let firstLast = rows[i][0] + " " + rows[i][1];

                
                people.set(firstLast.toLowerCase(), { name: firstLast, like: rows[i][2] || "", dislike: rows[i][3] || "", id: i, freeze: false });

                console.log(people);
            }
        }
    });

    return people;
}