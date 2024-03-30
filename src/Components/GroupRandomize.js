// WIP: Testing for making groups with responders' desire to work with someone
export function pairPreferences(people){

    // names[i][1] = access the responders' chosen person they want to work with
    // 1) pair up teams first then remove them from the list of names
    // 2) remaining names that are not paired up are then randomized
    // 3) 

    // run a for each loop that contains the responder's name and another for each for their preference
    // for each name : names:
    //      for each name2 : names:
    //          if (name2.preference == name && name.preference == name2)

    // put the group creator here
    const groups = [];

    // the teacher chooses the # of groups
    let tot_groups = 4;
    let desired_size = Math.floor(people.length/tot_groups);

    for (let i = 0; i < tot_groups; i++) {
        const groupi = [];
        groups[i] = groupi;
    }

    people = people.array.sort();

    console.log(people);

    // people.array.forEach(element => {
    //     const pref = element["like"];

    //     pref.array.forEach(prefName => {
    //         let person = people.find((name) => name == prefName && name["like"].includes(element));
    //         if (person != null) {

    //         }
    //     });
    // });

    // loops for responders' name
    // for(let i = 0; i < people.length; i++){
    //     const namePrefer = people[i]["like"];

        

        //loops for responders' chosen person they want to work with
        // for(let j = 0; j < namePrefer.length; j++){ // WIP
        //     people[].find((name) => name == people[i]["dislike"]) == null


            // if(j == 0 && groups[j].length < desired_size && groups[i].includes[j] != namePrefer[j]){
            //     const responders = namePrefer[j]; // list for the names of responder
            //     groups[i].push(namePrefer[j]);
            // }
            // if(j == 1 && groups[j].length < desired_size && groups[i].includes[j] != namePrefer[j]){
            //     const preference = namePrefer[j]; // list for the names of the responders' desired person to work with
            //     groups[i].push(namePrefer[j]);
            // }
        // }

    // }
    return groups;
}

export function groupRandomizer(names) {

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
            if (position == j && groupGroup[j].length < desired_size && groupGroup[j].find((name) => name == names[i]["dislike"]) == null) {
                groupGroup[j].push(names[i]["name"]);
                placed = true;
            }
        }
        if (!placed) {
            for (let k = 0; k < groupGroup.length; k++) {
                if (groupGroup[k].length < desired_size && groupGroup[k].find((name) => name == names[i]["dislike"]) == null) {
                    groupGroup[k].push(names[i]["name"]);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                for (let j = 0; j < groupGroup.length; j++) {
                    if (groupGroup[j].length < max_size && groupGroup[j].find((name) => name == names[i]["dislike"]) == null) {
                        groupGroup[j].push(names[i]["name"]);
                        break;
                    }
                }
            }
        }
    }

    for (let i = 0; i < groupGroup.length; i++) {
        console.log(groupGroup[i].join());
    }

    return groupGroup;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function binarySearch(names, target, low, high) {
    if (low > high) {
        return null;
    }

    let m = Math.ceil((low + high)/2);

    if (names[m]["name"] == target) {
        return m;
    }

    // if (names[m] > )
}