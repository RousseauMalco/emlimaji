export function csvRead(csv) {
    let papaparse = require('papaparse');
    let file = csv;

    var rows;
    var numResponse = 0;
    let people = [];
    let names = [];

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

                names[i] = rows[i][0];
                people[rows[i][0]]["dislike"] = rows[i][1];
                people[rows[i][0]]["like"] = rows[i][2];


                console.log(people);
                numResponse++;
            }
        }
    });

    return people;
}