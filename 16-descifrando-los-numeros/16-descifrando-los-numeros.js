function decodeNumber(symbols) {
    if (typeof symbols !== "string" || symbols.length < 1) return new Error("The param should be a string and cannot be empty")

    const decryptor = value => {
        const keys = {".": 1, ',': 5, ":": 10, ";": 50, "!": 100}
        return keys[value] || NaN
    }

    let decodedResult = 0

    symbols.split("").every((symbol, index) => {
        const nextSymbol = symbols.split("")[index+1]
        const decodedSymbol = decryptor(symbol)
        const nextDecodedSymbol = decryptor(nextSymbol)

        if (isNaN(decodedSymbol) || (nextSymbol !== undefined && isNaN(nextDecodedSymbol))) {
            decodedResult = NaN
            return false
        }

        decodedResult += decodedSymbol * (nextDecodedSymbol <= decodedSymbol || nextSymbol === undefined ? 1 : -1)

      return true
    })

    return decodedResult
}

module.exports = decodeNumber