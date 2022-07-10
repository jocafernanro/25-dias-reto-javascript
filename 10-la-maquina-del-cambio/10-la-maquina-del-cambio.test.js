const getCoins = require('./10-la-maquina-del-cambio.js')

describe("when calling getCoins", () => {
    test.each`
    change  | expectedCoins 
    ${51}   | ${[1, 0, 0, 0, 0, 1]}
    ${3}    | ${[1, 1, 0, 0, 0, 0]}
    ${5}    | ${[0, 0, 1, 0, 0, 0]}
    ${16}   | ${[1, 0, 1, 1, 0, 0]}
    ${100}  | ${[0, 0, 0, 0, 0, 2]}
    `('for change of $change, the expected array change is: $expectedCoins', ({ change, expectedCoins}) => {
        const result = getCoins(change)
        expect(result).toEqual(expectedCoins);
    });
})