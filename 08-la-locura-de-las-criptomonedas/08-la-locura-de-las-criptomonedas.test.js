const maxProfit = require('./08-la-locura-de-las-criptomonedas')

describe("when calling maxProfit", () => {
    test.each`
    pricesArray                     | expectedMaxProfit 
    ${[39, 18, 29, 25, 34, 32, 5]}  | ${16}
    ${[10, 20, 30, 40, 50, 60, 70]} | ${60} 
    ${[18, 15, 12, 11, 9, 7]}       | ${-1} 
    ${[3, 3, 3, 3, 3]}              | ${-1} 
    
    `('for $pricesArray prices array, the max possible profit is: $expectedMaxProfit', ({ pricesArray, expectedMaxProfit}) => {
        const result = maxProfit(pricesArray)
        expect(result).toEqual(expectedMaxProfit);
    });
})
