const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    let groupsMassive = [];
    let group = [];
    let counter = 0;
    arr.sort();
    while (counter < arr.length) {
        for (let y = 0; y < 3; y++){
            if (counter < arr.length) {
                group.push(arr[counter]);
                counter += 1
            }
        }
        if (group.length === 1) {
            groupsMassive.push(`Оставшиеся студенты: ${group[0]}`)
        } else if (group.length === 2) {
            groupsMassive.push(`Оставшиеся студенты: ${group[0]}, ${group[1]}`)
        } else {
            groupsMassive.push(group)
            group = []
        }
    }
    if (group.length === 0) {
        groupsMassive.push('Оставшиеся студенты: -')
    }
    return groupsMassive
}
console.log(sortStudentsByGroups(students))