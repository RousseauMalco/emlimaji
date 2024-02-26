
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
    "Harley Bowman",
    "Linh",
    "Jim",
    "Emma",
    "Malcolm"];

// const names = ["Henry", "Joe", "Jen", "carl", "Jason M. Oli"];

const group1 = [];
const group2 = [];
const group3 = [];
const group4 = [];

const groupGroup = [group1, group2, group3, group4];

// the teacher chooses the # of groups
let tot_groups = 4;
let desired_size = Math.floor(names.length/tot_groups);

let max_size = desired_size + 1

for (let i = 0; i < names.length; i++) {
    let position = getRandomInt(4);

    if (position == 0 && group1.length < desired_size) {
        group1.push(names[i]);
    } else if (position == 1 && group2.length < desired_size) {
        group2.push(names[i]);
    } else if (position == 2 && group3.length < desired_size) {
        group3.push(names[i]);
    } else if (position == 3 && group4.length < desired_size) {
        group4.push(names[i]);
    } else {
        let placed = false;
        for (let k = 0; k < groupGroup.length; k++) {
            if (groupGroup[k].length < desired_size) {
                groupGroup[k].push(names[i]);
                placed = true;
                break;
            }
        }

        if (placed == false) {
            for (let j = 0; j < groupGroup.length; j++) {
                if (groupGroup[j].length < max_size) {
                    groupGroup[j].push(names[i]);
                    break;
                }
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
