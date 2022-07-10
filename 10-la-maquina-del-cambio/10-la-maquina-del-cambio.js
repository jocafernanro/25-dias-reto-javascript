function getCoins(change) {
    const cents = [1, 2, 5, 10, 20, 50]
    const changeArr = [0, 0, 0, 0, 0, 0]
    let total = 0

    const findNextMaxValue = (value) => {
        for (let index = cents.length - 1; index >= 0; index--) {
            if (cents[index] <= value) return { value: cents[index], index }
        }
    }

    while (total < change) {
        const result = findNextMaxValue(change - total)
        total += result.value
        changeArr[result.index] += 1
    }


    return changeArr
}

module.exports = getCoins