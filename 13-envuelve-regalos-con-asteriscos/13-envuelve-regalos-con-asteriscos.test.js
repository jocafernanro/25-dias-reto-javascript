const wrapGifts = require('./13-envuelve-regalos-con-asteriscos')

describe('When calling wrapGifts', () => {
  it('should return Error if the parameter is not an array or it comes empty', () => {
    const expected = new Error('The parameter must be an array')
    const result = wrapGifts('string')
    expect(result).toEqual(expected)
  })

  it("should return an empty array if the parameter is an empty array", () => {
    const expected = []
    const result = wrapGifts([])
    expect(result).toEqual(expected)
  })

  it("should create an array with 3 positions that equals to the present height", () => {
    const expected = 3;
    const result = wrapGifts(["📷"])
    expect(result.length).toBe(expected)
  })

  it("should create an array with 3 positions and filled with strings, that equals to the present height ", () => {
    const expected = [expect.any(String), expect.any(String), expect.any(String)]
    const result = wrapGifts(["📷"])
    expect(result).toStrictEqual(expected)
  })

  it("should create an array with 3 positions and each position filled with the same numbers of asterisks, that equals to the present height", () => {
    const length = 4
    const expected = false
    const wrappedGifts = wrapGifts(["📷"])

    const result = wrappedGifts.some(row => row.length !== length)
    expect(result).toBe(expected)
  })

  it("should replace the asterisks with the emojis, takint into account the length of the emoji. It has to come wrapped", () => {
    const expected = [
      "****",
      "*📷*",
      "****",
    ]
    const result = wrapGifts(["📷"])
    expect(result).toStrictEqual(expected)
  })
  it("should replace the asterisks with the emojis, takint into account the length of the emoji. It has to come wrapped", () => {
    const expected = [ 
      '******',
      '*🏈🎸*',
      '*🎮🧸*',
      '******'
  ]
    const result = wrapGifts(["🏈🎸", "🎮🧸"])
    expect(result).toStrictEqual(expected)
  })
  it("should replace the asterisks with the emojis, takint into account the length of the emoji. It has to come wrapped", () => {
    const expected = [ 
      '****',
      '*📷*',
      '*⚽️*',
      '****'
  ]
    const result = wrapGifts(["📷", "⚽️"])
    expect(result).toStrictEqual(expected)
  })
})
