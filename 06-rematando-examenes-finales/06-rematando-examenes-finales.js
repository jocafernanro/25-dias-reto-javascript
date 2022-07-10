function sumPairs(numbers, result) {
    let foundNumbers = null;

    numbers.every((number, index) => {
        if (number > result) return;
        const numberToFind = result - number;
        const theOtherNumber = numbers.find((n, secondIndex) => n === numberToFind && index !== secondIndex)
        if (theOtherNumber) {
            foundNumbers = [number, theOtherNumber]
            return false
        }
        return true;

    })

    return foundNumbers
}

module.exports = sumPairs;
