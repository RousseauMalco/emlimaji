
let tot_groups = 4;
let desired_size = 0;
let max_size = 0;


export function pairPreferences({people,input,option}){
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
                const pref = element.like.split(', ');
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
            let placed = false;
    
            let randPosition = getRandomInt(tot_groups);
            if (tryPlacingInGroup(newGroups[randPosition], person, desired_size)) {
                placed = true;
            }

            if (!placed) {
                for (const group of newGroups) {
                    if (tryPlacingInGroup(group, person, desired_size)) {
                        placed = true;
                        break;
                    }
                }
            }

            if (!placed) {
                for (const group of newGroups) {
                    if (tryPlacingInGroup(group, person, max_size)) {
                        break;
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

// Try placing the person in the given group, respecting likes and dislikes as well as the given size limit.
// Returns true if the person was placed in the group.
function tryPlacingInGroup(group, person, sizeLimit) {
    let currentName = person.name.toLowerCase();
    let currentDislike = person.dislike.toLowerCase();
    
    if (group.length >= sizeLimit) {
        return false;
    }
    if (group.find((otherPerson) =>
        currentDislike.includes(otherPerson.name.toLowerCase())
        || otherPerson.dislike.toLowerCase().includes(currentName))
    ) {
        return false;
    }

    group.push(person);
    return true;
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