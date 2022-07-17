const fixFiles = require("./18-sistema-operativo-santa-claus")

describe("when calling fixFiles", () => {
    test("should return error if the files param is not an array or comes empty", () => {
        const expected = new Error("Error: files param has to be an array and cannot be empty")
        const result = fixFiles('')
        expect(result).toStrictEqual(expected)
    })

    test("should return the same array as it has no repeated items", () => {
        const expected = ['photo', 'postcard', 'file', 'game']
        const result = fixFiles(expected)
        expect(result).toStrictEqual(expected)
    })

    test("should return the files items as 'file(k) format if it's repeated in the array", () => {
        const expected = ['photo', 'photo(1)', 'photo(2)']
        const result = fixFiles(['photo', 'photo', 'photo'])
        expect(result).toStrictEqual(expected)
    })

    test.each`
        files                                                   | processed
        ${['photo', 'postcard', 'photo', 'photo', 'video']}     | ${['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']} 
        ${['file', 'file', 'file', 'game', 'game']}             | ${['file', 'file(1)', 'file(2)', 'game', 'game(1)']} 
        ${['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']}    | ${['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']} 
        ${["a", "a", "aa", "a", "a", "a", "aa"]}                | ${["a", "a(1)", "aa", "a(2)", "a(3)", "a(4)", "aa(1)"]}
    `('the files $files should be processed as $processed', ({ files, processed }) => {
        const expected = processed
        const result = fixFiles(files)
        expect(result).toStrictEqual(expected)
    });
})