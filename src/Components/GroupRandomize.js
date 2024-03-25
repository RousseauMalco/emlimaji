// WIP: Testing for making groups with responders' desire to work with someone
export function pairPreferences(names){

    // names[i][1] = access the responders' chosen person they want to work with
    // 1) pair up teams first then remove them from the list of names
    // 2) remaining names that are not paired up are then randomized
    // 3) 

    // run a for each loop that contains the responder's name and another for each for their preference
    // for each name : names:
    //      for each name2 : names:
    //          if (name2.preference == name && name.preference == name2)

    // put the group creator here
    const preferredGroups = [];

    // the teacher chooses the # of groups
    let tot_groups = 4;
    let desired_size = Math.floor(names.length/tot_groups);

    for (let i = 0; i < tot_groups; i++) {
        const groupi = [];
        preferredGroups[i] = groupi;
    }

    // loops for responders' name
    for(let i = 0; i < names.length; i++){
        const namePrefer = names[i]["like"];

        //loops for responders' chosen person they want to work with
        for(let j = 0; j < namePrefer.length; j++){ // WIP
            if(j == 0 && preferredGroups[j].length < desired_size && preferredGroups[i].includes[j] != namePrefer[j]){
                const responders = namePrefer[j]; // list for the names of responder
                preferredGroups[i].push(namePrefer[j]);
            }
            if(j == 1 && preferredGroups[j].length < desired_size && preferredGroups[i].includes[j] != namePrefer[j]){
                const preference = namePrefer[j]; // list for the names of the responders' desired person to work with
                preferredGroups[i].push(namePrefer[j]);
            }
        }

    }
    return preferredGroups;
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