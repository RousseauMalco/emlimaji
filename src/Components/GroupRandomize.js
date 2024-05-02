let tot_groups = 0;
let desired_size = 0;

// Groups together people who want to work together and then places them into groups.
export function pairPreferences({people,input_size,groups}){
    desired_size = Number(input_size);
    let max_size = desired_size + 1;
    tot_groups = groups.length;

    people.forEach(element => {
        if (!groupsContain(groups, element)) {
            if (element.like !== "" && element.like != null) {
                const pref = element.like.split(', ');
                let grouped = [element];
                pref.forEach(prefName => {
                    let person = people.get(prefName.toLowerCase());
                    if (person != null && person.like.toLowerCase().includes(element.name.toLowerCase()) && 
                    person.name.toLowerCase() !== element.name.toLowerCase() && 
                    person.dislike.toLowerCase() !== element.name.toLowerCase()) {
                        grouped.push(person);
                    }
                });
        
                let counter = 0;
                grouped = grouped.reverse();
                while (grouped.length > 0) {

                    let placementGroup;
                    let position = 0;
                    for (let i = 0; i < groups.length; i++) {
                        position = getRandomInt(tot_groups);
                        if(groups[position].length < 1) {
                            placementGroup = groups[position];
                        }
                    }

                    if (placementGroup == null) {
                        position = getRandomInt(tot_groups);
                        placementGroup = groups[position];
                    }

                    if (placementGroup.length < max_size) {
                        let length = grouped.length;
                        for (let i = 0; i < length; i++) {

                            if ((placementGroup.length + 1) < max_size) {
                                placementGroup.push(grouped.pop());
                            }                       
                        }
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

// Tries to place each person into a random group. If that group is already full, it then sequentially tries to place that person
// into each of the groups until that person is placed.
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
        }
    });

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

// Returns a random number between 0 and the input.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// Returns whether the target person is already in the set of groups given.
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