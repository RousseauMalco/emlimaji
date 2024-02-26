let papaparse = require('papaparse')

const csvData = "hi, hello, world, 1, 2, 3"

console.log(papaparse.parse(csvData))

// Papa.parse("csvTest.csv", {
// 	complete: function(results) {
// 		console.log(results);
// 	}
// });

// Papa.parse(file, config)