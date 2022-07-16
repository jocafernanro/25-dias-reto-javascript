const missingReindeer = require('./14-en-busca-reno-perdido')

describe("when calling missingReindeer", () => {
    test("should return error if the param is not an array", () => {
        const expected = new Error("Param must be an array")
        const result = missingReindeer("")
        expect(result).toStrictEqual(expected)
    })
    test("should return error if the array contains numbers greater than 100", () => {
        const expected = new Error("Array contains numbers greater than 100")
        const result = missingReindeer([1, 2, 103])
        expect(result).toStrictEqual(expected)
    })

    test("should return error if the array contains numbers less than 0", () => {
        const expected = new Error("Array contains numbers less than 0")
        const result = missingReindeer([0, -1, 1, 2, 20])
        expect(result).toStrictEqual(expected)
    })
    test("should return the missing reindeer number 1 given the array [0, 2, 3]", () => {
        const expected = 2
        const result = missingReindeer([0, 1, 3])
        expect(result).toStrictEqual(expected)
    })

    test.each`
    array                           | reindeer
    ${[0, 2, 3]}                    | ${1} 
    ${[5, 6, 1, 2, 3, 7, 0]}        | ${4} 
    ${[0, 1]}                       | ${2} 
    ${[3, 0, 1]}                    | ${2} 
    ${[9, 2, 3, 5, 6, 4, 7, 0, 1]}  | ${8} 
    ${[0]}                          | ${1} 
    ${[1]}                          | ${0} 

`('should the missing reindeer number $reindeer given the array $array', ({ array, reindeer }) => {
        const expected = reindeer
        const result = missingReindeer(array)
        expect(result).toStrictEqual(expected)
    });
})