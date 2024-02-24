
const names = ["Josie Melendez",
    "Leo Mccullough",
    "Tamara Hutchinson",
    "Wayne Houston",
    "Jakob Morrow",
    "Filip Sanchez",
    "Chanel O'Connor",
    "Hayden Sears",
    "Megan Farrell",
    "Lily-Rose Baxter",
    "Gerard Nichols",
    "Mason Doyle",
    "Caroline Simmons",
    "Valerie Mckay",
    "Eric Murphy",
    "Harley Bowman"];

const group1 = [];
const group2 = [];
const group3 = [];
const group4 = [];

const groupGroup = [group1, group2, group3, group4];

var tot_groups = 4;
var max_size = tot_groups + names.length % tot_groups;

for (var i = 0; i < names.length; i++) {
    var group = getRandomInt(4);
    if (group == 0 && group1.length < 4) {
        group1.push(names[i]);
    } else if (group == 1 && group2.length < 4) {
        group2.push(names[i]);
    } else if (group == 2 && group3.length < 4) {
        group3.push(names[i]);
    } else if (group == 3 && group4.length < 4) {
        group4.push(names[i]);
    } else {
        for (var j = 0; j < groupGroup.length; j++) {
            if (groupGroup[j].length < max_size) {
                groupGroup[j].push(names[i]);
            }
        }
    }
}

console.log(group1);
console.log(group2);
console.log(group3);
console.log(group4);

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
