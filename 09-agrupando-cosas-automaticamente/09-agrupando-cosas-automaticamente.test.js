const groupBy = require('./09-agrupando-cosas-automaticamente')

describe("when calling groupBy", () => {
    test.each`
    itemsArray                          | groupByInstruction                                | expectedGroup 
    ${[6.1, 4.2, 6.3]}                  | ${Math.floor}                                     | ${{ 6: [6.1, 6.3], 4: [4.2] }}
    ${['one', 'two', 'three']}          | ${'length'}                                       | ${{ 3: ['one', 'two'], 5: ['three'] }}
    ${[{ age: 23 }, { age: 24 }]}           | ${'age'}                                          | ${{ 23: [{ age: 23 }], 24: [{ age: 24 }] }}
    ${[
            { title: 'JavaScript: The Good Parts', rating: 8 },
            { title: 'Aprendiendo Git', rating: 10 },
            { title: 'Clean Code', rating: 9 },
        ]}   | ${'rating'} | ${{
            8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
            9: [{ title: 'Clean Code', rating: 9 }],
            10: [{ title: 'Aprendiendo Git', rating: 10 }]
        }}

    
    `('for $pricesArray prices array, the max possible profit is: $expectedMaxProfit', ({ itemsArray, groupByInstruction, expectedGroup }) => {
            const result = groupBy(itemsArray, groupByInstruction)
            expect(result).toEqual(expectedGroup);
        });
})