function createXmasTree(height) {
    if (height < 1 || height > 100) return false

    let output = ""
    const nAsteriskToPintByLevel = level => level + (level - 1)
    const maxNOfAsterisks = nAsteriskToPintByLevel(height)

    const createString = (asterisksToFill, charToFill = "*") => {
        let string = ""
        const beginToFillAt = (maxNOfAsterisks - asterisksToFill) / 2
        for (let index = 0; index < maxNOfAsterisks; index++) {
            if (index < beginToFillAt || index >= beginToFillAt + asterisksToFill) {
                string += "_"
            } else {
                string += charToFill
            }
        }
        return string
    }

    for (let index = 1; index <= height; index++) {
        const nAsterisksToFill = nAsteriskToPintByLevel(index)
        output += createString(nAsterisksToFill) + '\n'
    }

    const printTrunk = createString(nAsteriskToPintByLevel(1), "#")
    output += printTrunk + '\n'
    output += printTrunk

    return output
}

module.exports = createXmasTree