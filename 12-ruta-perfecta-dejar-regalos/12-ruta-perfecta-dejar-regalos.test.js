const getMinJump = require('./12-ruta-perfecta-dejar-regalos')

describe('when calling getMinJump', () => {
  it('should return error if not array is given', () => {
    const expected = "Error: 'obstacles' must be a filled array"
    const result = getMinJump('test')
    expect(result).toBe(expected)
  })
  it('should return error if array is empty', () => {
    const expected = "Error: 'obstacles' must be a filled array"
    const result = getMinJump([])
    expect(result).toBe(expected)
  })

  it('should return Error if an obstacle comes on position 0', () => {
    const expected = 'Error: an obstacle comes on position 0'
    const result = getMinJump([0, 1, 2, 3, 4])
    expect(result).toBe(expected)
  })
  it('should return the max obstacle number if it doesnt not find any minJump', () => {
    const expected = 5
    const result = getMinJump([1, 2, 3, 4, 5])
    expect(result).toBe(expected)
  })
  it('should increment jumpSize by one if it encounters any obstacle until finish the path without hit one and return the jumpSize', () => {
    const expected = 2
    const result = getMinJump([1, 3, 5, 7])
    expect(result).toBe(expected)
  })

  it('should return 4 as the minJump given the obstacles [5, 3, 6, 7, 9]', () => {
    const expected = 4
    const result = getMinJump([5, 3, 6, 7, 9])
    expect(result).toBe(expected)
  })

  it('should return 7 as the minJump given the obstacles [2, 4, 6, 8, 10]', () => {
    const expected = 7
    const result = getMinJump([2, 4, 6, 8, 10])
    expect(result).toBe(expected)
  })

  it('should return 4 as the minJump given the obstacles [1, 2, 3, 5]', () => {
    const expected = 4
    const result = getMinJump([1, 2, 3, 5])
    expect(result).toBe(expected)
  })

  it('should return 2 as the minJump given the obstacles [3, 7, 5]', () => {
    const expected = 2
    const result = getMinJump([3, 7, 5])
    expect(result).toBe(expected)
  })

  it('should return 2 as the minJump given the obstacles [9, 5, 1]', () => {
    const expected = 2
    const result = getMinJump([9, 5, 1])
    expect(result).toBe(expected)
  })
})
