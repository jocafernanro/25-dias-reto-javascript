const sumPairs = require('./06-rematando-examenes-finales');

describe("when calling sumPairs", () => {
    test.each`
    array                       | value | expectedPairs
    ${[3, 5, 7, 2]}             | ${10} | ${[3, 7]}
    ${[-3, -2, 7, -5]}          | ${10} | ${null}
    ${[2, 2, 3, 1]}             | ${4}  | ${[2, 2]}
    ${[6, 7, 1, 2]}             | ${8}  | ${[6, 2]}
    ${[0, 2, 2, 3, -1, 1, 5]}   | ${6}  | ${[1, 5]}
    `('for $array array, the pairs sum that results in $value are: $expectedPairs', ({ array, value, expectedPairs }) => {
        const pair = sumPairs(array, value)
        expect(pair).toEqual(expectedPairs);
    });
})
