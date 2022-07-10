const shouldBuyFidelity = require('./11-vale-la-pena-tarjeta-fidelidad-cine');

describe('when calling shouldBuyFidelity', () => {
    test.each`
    nVisits     | expectedDecision 
    ${1}        | ${false}
    ${100}      | ${true}
    ${3}        | ${false}
    
    `('for $nVisits visits to the cinema, should I buy the fidelity card: $expectedDecision', ({ nVisits, expectedDecision}) => {
        const result = shouldBuyFidelity(nVisits)
        expect(result).toEqual(expectedDecision);
    });
})