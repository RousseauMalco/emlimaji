
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
        if (!contains(groups, element)) {
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

function groupRandomizer(people, groups) {

    const groupGroup = groups;
    
    people.forEach(element => {
        if (!contains(groups, element)) {
            let position = getRandomInt(tot_groups);
            let placed = false;
            let currentName = element.name.toLowerCase();
            let currentDislike = element.dislike.toLowerCase();
    
            for (let j = 0; j < groupGroup.length; j ++) {
                if (position == j && groupGroup[j].length < desired_size && groupGroup[j].find((person) => currentDislike.includes(person.name.toLowerCase()) || person.dislike.toLowerCase().includes(currentName)) == null) {
                    groupGroup[j].push(element);
                    placed = true;
                }
            }
            if (!placed) {
                for (let k = 0; k < groupGroup.length; k++) {
                    if (groupGroup[k].length < desired_size && groupGroup[k].find((person) => currentDislike.includes(person.name.toLowerCase()) || person.dislike.toLowerCase().includes(currentName)) == null) {
                        groupGroup[k].push(element);
                        placed = true;
                        break;
                    }
                }
    
                if (!placed) {
                    for (let j = 0; j < groupGroup.length; j++) {
                        if (groupGroup[j].length < max_size && groupGroup[j].find((person) => currentDislike.includes(person.name.toLowerCase()) || person.dislike.toLowerCase().includes(currentName)) == null) {
                            groupGroup[j].push(element);
                            break;
                        }
                    }
                }
            }
        }
    });
    

    for (let i = 0; i < groupGroup.length; i++) {
        console.log(groupGroup[i].join());
    }

    return groupGroup;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function contains(groups, target) {
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