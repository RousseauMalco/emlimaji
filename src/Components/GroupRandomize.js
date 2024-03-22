// import {csvRead} from './csvRead.js';

// document.getElementById("myButton").addEventListener("click", () => {
// document.getElementById('fileInput').addEventListener('change', handleFileSelect);
// })

// function handleFileSelect(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function(event) {
//         const csv = event.target.result;
//         groupRandomizer('"' + csv + '"');
//     };

//     reader.readAsText(file);
// }

export function groupRandomizer(names) {

    // const names = ["Josie Melendez",
    //     "Leo Mccullough",
    //     "Tamara Hutchinson",
    //     "Wayne Houston",
    //     "Jakob Morrow",
    //     "Filip Sanchez",
    //     "Chanel O'Connor",
    //     "Hayden Sears",
    //     "Megan Farrell",
    //     "Lily-Rose Baxter",
    //     "Gerard Nichols",
    //     "Mason Doyle",
    //     "Caroline Simmons",
    //     "Valerie Mckay",
    //     "Eric Murphy",
    //     "Harley Bowman",
    //     "Linh",
    //     "Jim",
    //     "Emma",
    //     "Malcolm"];

    // const names = csvRead(csv);

    // const names = ["Henry", "Joe", "Jen", "carl", "Jason M. Oli"];

    const groupGroup = [];

    // the teacher chooses the # of groups
    let tot_groups = 4;
    let desired_size = Math.floor(names.length/tot_groups);

    for (let i = 0; i < tot_groups; i++) {
        const groupi = [];
        groupGroup[i] = groupi;
    }

    let max_size = desired_size + 1

    for (let i = 0; i < names.length; i++) {
        let position = getRandomInt(tot_groups);
        let placed = false;

        for (let j = 0; j < groupGroup.length; j ++) {
            if (position == j && groupGroup[j].length < desired_size && groupGroup[j].find((name) => name == names[i][1]) == null) {
                groupGroup[j].push(names[i][0]);
                placed = true;
            }
        }
        if (!placed) {
            for (let k = 0; k < groupGroup.length; k++) {
                if (groupGroup[k].length < desired_size && groupGroup[k].find((name) => name == names[i][1]) == null) {
                    groupGroup[k].push(names[i][0]);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                for (let j = 0; j < groupGroup.length; j++) {
                    if (groupGroup[j].length < max_size && groupGroup[j].find((name) => name == names[i][1]) == null) {
                        groupGroup[j].push(names[i][0]);
                        break;
                    }
                }
            }
        }
    }

    for (let i = 0; i < groupGroup.length; i++) {
        console.log(groupGroup[i].join());
    }

// document.write(group1);
// document.write(group2);
// document.write(group3);
// document.write(group4);

// const outputText = group1.join() + "/n" + group2.join() + "/n" + group3.join() + "/n" + group4.join();
// const outputElement = document.getElementById("output");
// outputElement.innerHTML = outputText;
    return groupGroup;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}