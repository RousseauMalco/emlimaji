
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

// const names = ["Henry", "Joe", "Jen", "carl", "Jason M. Oli"];

const group1 = [];
const group2 = [];
const group3 = [];
const group4 = [];

const groupGroup = [group1, group2, group3, group4];

let tot_groups = 4;
let desired_size = 4;

// if (Math.floor(names.length % tot_groups < tot_groups) < ) {

// }
let max_size = desired_size + 1

if (group1[1] != null) {
    console.log("not reset");
}

for (let i = 0; i < names.length; i++) {
    let position = getRandomInt(4);
    console.log(position);

    if (position == 0 && group1.length <= desired_size) {
        console.log("iteration" + i + "i'm in this conditional 1");
        group1.push(names[i]);
    } else if (position == 1 && group2.length <= desired_size) {
        console.log("iteration" + i + "i'm in this conditional 2");

        group2.push(names[i]);
    } else if (position == 2 && group3.length <= desired_size) {
        console.log("iteration" + i + "i'm in this conditional 3");

        group3.push(names[i]);
    } else if (position == 3 && group4.length <= desired_size) {
        console.log("iteration" + i + "i'm in this conditional 4");

        group4.push(names[i]);
    } else {

        // for (let )
        console.log("In else conditional at " + i + " iteration");
        for (let j = 0; j < groupGroup.length; j++) {
            if (groupGroup[j].length < max_size) {
                groupGroup[j].push(names[i]);
                break;
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
