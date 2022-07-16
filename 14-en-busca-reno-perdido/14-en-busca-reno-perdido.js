// The solution for this challenge is to use Arithmetic progression sum formula: n(n+1)/2.
function missingReindeer(ids) {
    if (!Array.isArray(ids)) return new Error("Param must be an array")

    if (Math.max(...ids) > 100) return new Error("Array contains numbers greater than 100")
    if (Math.min(...ids) < 0) return new Error("Array contains numbers less than 0")

    return (ids.length * (ids.length + 1) / 2) - ids.reduce((acc, cur) => acc + cur, 0)
}

// Others possible solution: substract the ids arr sum and ids.length + 1 arr sum

// function missingReindeer(ids) {
//     if (!Array.isArray(ids)) return new Error("Param must be an array")

//     if (Math.max(...ids) > 100) return new Error("Array contains numbers greater than 100")
//     if (Math.min(...ids) < 0) return new Error("Array contains numbers less than 0")

//     const maxNumber = ids.length + 1
//     const sum = arr => arr.reduce((acc, cur) => acc + cur, 0)
//     return sum([...Array(maxNumber)].map((_, number) => number)) - sum(ids)
// }

module.exports = missingReindeer