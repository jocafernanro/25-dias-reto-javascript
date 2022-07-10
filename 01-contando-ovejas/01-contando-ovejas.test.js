const contarOvejas = require('./01-contando-ovejas')


describe("When calling 'contarOvejas'", () => {
    test("Using an specific sheeps arrays, should filter the ones that contains the letter 'n', the letter 'a' and the 'color' property has the value 'rojo' ", () => {
        const sheeps = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' },
            { name: 'AAAAAaaaaa', color: 'rojo' },
            { name: 'Nnnnnnnn', color: 'rojo' }
        ]

        const filteredSheeps = contarOvejas(sheeps)

        expect(filteredSheeps).toEqual(
            [
                { name: 'Navidad', color: 'rojo' },
                { name: 'Ki Na Ma', color: 'rojo' }
            ]
        )
    })
})
