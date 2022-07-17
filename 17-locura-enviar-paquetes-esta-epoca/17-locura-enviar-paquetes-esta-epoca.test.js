const countPackages = require("./17-locura-enviar-paquetes-esta-epoca")

describe("when calling countPackages", () => {
    test("should return error if carriers or carrierId params comes empty", () => {
        const expected = new Error("Error: Carriers and CarrierID params cannot be empty")
        const result = countPackages([], '')
        expect(result).toStrictEqual(expected)
    })

    test("should return error if carriers param is not an array", () => {
        const expected = new Error("Error: Carriers must be an array")
        const result = countPackages('', '')
        expect(result).toStrictEqual(expected)
    })

    test("should return error if carrierId param is not an string", () => {
        const expected = new Error("Error: CarrierID must be an string")
        const result = countPackages([[]], [])
        expect(result).toStrictEqual(expected)
    })

    test("should return 0 if the carrierID cannot be found inside carriers array", () => {
        const expected = 0
        const result = countPackages([['carrier1', 5, ['midu', 'jelowing']]], "carrier_not_exists")
        expect(result).toStrictEqual(expected)
    })

    test("should return the packages that a carrier can carry if the carrierID is found", () => {
        const expected = 1
        const result = countPackages([['carrier1', 1, []]], "carrier1")
        expect(result).toStrictEqual(expected)
    })

    test("should return the packages that a carrier and his team can carry if the carrierID is found", () => {
        const expected = 2
        const result = countPackages([['carrier1', 1, ['carrier2']], ['carrier2', 1, []]], "carrier1")
        expect(result).toStrictEqual(expected)
    })

    test("should return 9 as the packages number for the carrier dapelu an his team", () => {
        const expected = 9
        const carriers = [
            ['dapelu', 5, ['midu', 'jelowing']],
            ['midu', 2, []],
            ['jelowing', 2, []]
        ]
        const result = countPackages(carriers, "dapelu")
        expect(result).toStrictEqual(expected)
    })
    test("should return 15 as the packages number for the carrier camila an her team", () => {
        const expected = 15
        const carriers = [
            ['lolivier', 8, ['camila', 'jesuspoleo']],
            ['camila', 5, ['sergiomartinez', 'conchaasensio']],
            ['jesuspoleo', 4, []],
            ['sergiomartinez', 4, []],
            ['conchaasensio', 3, ['facundocapua', 'faviola']],
            ['facundocapua', 2, []],
            ['faviola', 1, []]
        ]
        const result = countPackages(carriers, "camila")
        expect(result).toStrictEqual(expected)
    })

})