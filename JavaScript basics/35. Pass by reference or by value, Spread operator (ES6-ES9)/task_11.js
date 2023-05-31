const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let familyArr = '';
    for (let i of arr) {
        familyArr += ` ${i}`
    }
    if (familyArr === '') {
        return 'Семья пуста';
    } else {
    return `Семья состоит из:${familyArr}`
    }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i of arr) {
        console.log(i.toLowerCase());
    }
}