const decodeNumber = require('./16-descifrando-los-numeros')

describe("when calling decodeNumber", () => {
    test("should return error if the param is not a string or comes empty", () => {
        const expected = new Error("The param should be a string and cannot be empty")
        const result = decodeNumber([])
        expect(result).toStrictEqual(expected)

        const expectedNotEmpty = new Error("The param should be a string and cannot be empty")
        const resultEmpty = decodeNumber("")
        expect(resultEmpty).toStrictEqual(expectedNotEmpty)
    })

    test("should decipher the char '.' as 1", () => {
        const expected = 1
        const result = decodeNumber(".")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the string '... ' as 3", () => {
        const expected = 3
        const result = decodeNumber("...")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the char ',' as 5", () => {
        const expected = 5
        const result = decodeNumber(",")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the string ',,,' as 15", () => {
        const expected = 15
        const result = decodeNumber(',,,')
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the char ':' as 10", () => {
        const expected = 10
        const result = decodeNumber(":")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the string ':::' as 30", () => {
        const expected = 30
        const result = decodeNumber(":::")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the char ';' as 50", () => {
        const expected = 50
        const result = decodeNumber(";")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the string ';;;' as 150", () => {
        const expected = 150
        const result = decodeNumber(";;;")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the char '!' as 100", () => {
        const expected = 100
        const result = decodeNumber("!")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the string '!!!' as 300", () => {
        const expected = 300
        const result = decodeNumber("!!!")
        expect(result).toStrictEqual(expected)
    })
    test("should decipher the string '.,' as 4", () => {
        const expected = 4
        const result = decodeNumber(".,")
        expect(result).toStrictEqual(expected)
    })


    test.each`
        string              | decoded
        ${"..."}            | ${3} 
        ${'.,'}             | ${4} 
        ${',.'}             | ${6} 
        ${',...'}           | ${8} 
        ${'.........!'}     | ${107} 
        ${'.;'}             | ${49} 
        ${'..,'}            | ${5} 
        ${'..,!'}           | ${95} 
        ${'.;!'}            | ${49} 
        ${'!!!'}            | ${300} 
        ${';!'}             | ${50} 
        ${';.W'}            | ${NaN} 
    `('the string $string should be decode as $decoded', ({ string, decoded }) => {
        const expected = decoded
        const result = decodeNumber(string)
        expect(result).toStrictEqual(expected)
    });
})