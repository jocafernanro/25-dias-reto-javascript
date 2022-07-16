const checkSledJump = require('./15-el-salto-perfecto')

describe("when calling checkSledJump", () => {

    test("should return error if param is not an array", () => {
        const expected = new Error("The param is not an array")
        const result = checkSledJump("")
        expect(result).toStrictEqual(expected)
    })
    test("should return error if the array comes empty or have less than 3 values", () => {
        const expected = new Error("The array is empty or have less than 3 values")
        const result = checkSledJump([])
        expect(result).toStrictEqual(expected)
    })

    test("should return false if the values only gets higher", () => {
        const expected = false
        const result = checkSledJump([1, 2, 3, 4])
        expect(result).toStrictEqual(expected)
    })

    test("should return false if each value is not an increment or decrement of the previous one", () => {
        const expected = false
        const result = checkSledJump([1, 2, 2, 3, 2])
        expect(result).toStrictEqual(expected)
    })

    test("should return false if each value is not an increment or decrement of the previous one", () => {
        const expected = false
        const result = checkSledJump([1, 2, 3, 2, 2])
        expect(result).toStrictEqual(expected)
    })

    test("should return false start rising from falling", () => {
        const expected = false
        const result = checkSledJump([1, 2, 3, 2, 1, 2, 3])
        expect(result).toStrictEqual(expected)
    })


    test.each`
        array                       | value
        ${[1, 2, 3, 2, 1]}          | ${true} 
        ${[0, 1, 0]}                | ${true} 
        ${[0, 3, 2, 1]}             | ${true} 
        ${[0, 1000, 1]}             | ${true} 
        ${[2, 4, 4, 6, 2]}          | ${false} 
        ${[1, 2, 3]}                | ${false} 
        ${[1, 2, 3, 2, 1, 2, 3]}    | ${false} 
    `('should indicates that the parable $array of the sled is $value', ({ array, value }) => {
        const expected = value
        const result = checkSledJump(array)
        expect(result).toStrictEqual(expected)
    });

})