
let tot_groups = 4;
let desired_size = 0;
let max_size = 0;


// WIP: Testing for making groups with responders' desire to work with someone
export function pairPreferences({people,input,option}){
    
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
    if (option==="Number of groups") {
        tot_groups = input;
        desired_size = Math.ceil(people.size/tot_groups);
    } else if (option === "Group Size") {
        desired_size = input;
        tot_groups = Math.ceil(people.size/desired_size);
    }

    max_size = desired_size + 1;
    // the teacher chooses the # of groups
    

    for (let i = 0; i < tot_groups; i++) {
        const groupi = [];
        groups[i] = groupi;
    }

    people.forEach(element => {
        if (!groupsContain(groups, element)) {
            if (element.like != "" && element.like != null) {
                const pref = element.like.split(',');
                const grouped = [element];
                pref.forEach(prefName => {
                    let person = people.get(prefName.toLowerCase());
                    if (person != null && person.like.toLowerCase().includes(element.name.toLowerCase()) && grouped.length < max_size) {
                        grouped.push(person);
                    }
                });
        
                let placed = false;
                let counter = 0;
                while (!placed) {
                    let position = getRandomInt(tot_groups);
                    if (groups[position].length < max_size && groups[position].length + grouped.length < max_size) {
                        grouped.forEach(element => groups[position].push(element));
                        placed = true;
                    }
                    counter++;
                    if (counter > tot_groups) {
                        break;
                    }
                }
            }
        }
    });

    return groupRandomizer(people, groups);
}

function groupRandomizer(people, existingGroups) {

    const newGroups = existingGroups;
    
    people.forEach(person => {
        if (!groupsContain(existingGroups, person)) {
            let newPosition = getRandomInt(tot_groups);
            let placed = false;
            let currentName = person.name.toLowerCase();
            let currentDislike = person.dislike.toLowerCase();
    
            for (let j = 0; j < newGroups.length; j++) {
                if (newPosition == j && newGroups[j].length < desired_size && newGroups[j].find((person) => currentDislike.includes(person.name.toLowerCase()) || person.dislike.toLowerCase().includes(currentName)) == null) {
                    newGroups[j].push(person);
                    placed = true;
                }
            }
            if (!placed) {
                for (let k = 0; k < newGroups.length; k++) {
                    if (newGroups[k].length < desired_size && newGroups[k].find((person) => currentDislike.includes(person.name.toLowerCase()) || person.dislike.toLowerCase().includes(currentName)) == null) {
                        newGroups[k].push(person);
                        placed = true;
                        break;
                    }
                }
    
                if (!placed) {
                    for (let j = 0; j < newGroups.length; j++) {
                        if (newGroups[j].length < max_size && newGroups[j].find((person) => currentDislike.includes(person.name.toLowerCase()) || person.dislike.toLowerCase().includes(currentName)) == null) {
                            newGroups[j].push(person);
                            break;
                        }
                    }
                }
            }
        }
    });
    

    for (let i = 0; i < newGroups.length; i++) {
        console.log(newGroups[i].join());
    }

    return newGroups;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function groupsContain(groups, target) {
    let included = false;
    let i = 0;
    while (i < groups.length && !included) {
        if (groups[i].includes(target)) {
            included = true;
            break;
        }
        i++;
    }
    return included;
}