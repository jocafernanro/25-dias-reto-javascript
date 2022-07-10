const isValid = require('./03-grinch-quiere-fastidiar-navidad');

describe("When calling 'isValid'", () => {
    test("should return true when there are just words without parenthesis, keys or brackets", () => {
        const letter = 'iphone playstation bici zapatos'
        const result = isValid(letter)
        expect(result).toBe(true)
    })

    test("should return true if there are parenthesis with its opened and closed ones", () => {
        const letter = 'bici coche (balón) bici coche peluche'
        const result = isValid(letter)
        expect(result).toBe(true)
    })

    test("should return false if there are parenthesis without its opened and closed ones", () => {
        const letter = 'bici coche (balón bici coche peluche'
        const result = isValid(letter)
        expect(result).toBe(false)
    })

    test("should return false if there are keys within the text", () => {
        const letter = '(peluche {) bici playstation coche'
        const result = isValid(letter)
        expect(result).toBe(false)
    })

    test("should return false if there are brackets within the text", () => {
        const letter = '(peluche [) bici playstation coche'
        const result = isValid(letter)
        expect(result).toBe(false)
    })

    test("should return false if the parenthesis are empty", () => {
        const letter = 'bici coche () bici coche peluche'
        const result = isValid(letter)
        expect(result).toBe(false)

        const letter2 = "() bici"
        const result2 = isValid(letter2)
        expect(result2).toBe(false)

        const letter3 = "(()) bici"
        const result3 = isValid(letter3)
        expect(result3).toBe(false)
    })
})
