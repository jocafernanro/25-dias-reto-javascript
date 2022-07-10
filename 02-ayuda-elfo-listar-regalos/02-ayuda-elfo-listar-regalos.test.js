const listGifts = require("./02-ayuda-elfo-listar-regalos");

describe("When calling 'listGifts'", () => {
    test("Given a letter, should return the items count as an array", () => {
        const letter = 'iphone playstation bici zapatos'
        const gifts = listGifts(letter)
        const expectedList = {
            iphone: 1,
            playstation: 1,
            bici: 1,
            zapatos: 1
        }
        expect(gifts).toEqual(expectedList)
    })
    test("Given a letter should not take into account the objects that starts with '_' ", () => {
        const letter = '_playstation bici '
        const gifts = listGifts(letter)
        const expectedList = {
            bici: 1,
        }
        expect(gifts).toEqual(expectedList)
    })
    test("Given a letter, should not take into account the doble empty spaces ", () => {
        const letter = ' teclado  bici  portatil '
        const gifts = listGifts(letter)
        const expectedList = {
            teclado: 1,
            bici: 1,
            portatil: 1
        }
        expect(gifts).toEqual(expectedList)
    })

    test("Given the final letter, should take into account all the retrictions at the same time", () => {
        const letter = 'bici coche balón _playstation bici coche  peluche'
        const gifts = listGifts(letter)
        const expectedList = {
            bici: 2,
            coche: 2,
            balón: 1,
            peluche: 1
        }
        expect(gifts).toEqual(expectedList)
    })

})
