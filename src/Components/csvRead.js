export function csvRead(csv) {
    let papaparse = require('papaparse');
    let file = csv;

    var rows;
    var numResponse = 0;
    const people = new Map();
    // let names = [];

    papaparse.parse(file, {
        download:false,
        header: false,
        delimiter: ",",
        complete: function(results) {
            rows = results.data;
            rows.shift(); // shift removes the first element and returns that value

            for(var i=0; i < rows.length; i++){
                rows[i].shift();

                // const person = {};
                // person["name"] = rows[i][0];
                // person["dislike"] = rows[i][1];
                // person["like"] = rows[i][2];
                // people[i] = person;
                let firstLast = rows[i][0] + " " + rows[i][1];
                
                people.set(firstLast.toLowerCase(), { name: firstLast, like: rows[i][2] || "", dislike: rows[i][3] || "", id: i });

                console.log(people);
                numResponse++;
            }
        }
    });

    return people;
}