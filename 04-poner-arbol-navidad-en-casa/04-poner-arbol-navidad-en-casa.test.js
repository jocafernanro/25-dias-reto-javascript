const createXmasTree = require('./04-poner-arbol-navidad-en-casa.js')

describe("When calling 'createXmasTree'", () => {
    test("should return false if the height is less than 1 or greater than 100", () => {
        const height = 0
        const result = createXmasTree(height)
        expect(result).toBe(false)

        const height2 = 101
        const result2 = createXmasTree(height2)
        expect(result2).toBe(false)
    })

    test("should return a string with the tree draw with a height of 3", () => {
        const height = 3
        const result = createXmasTree(height)
        const expectedTree = ""
            + "__*__" + "\n"
            + "_***_" + "\n"
            + "*****" + "\n"
            + "__#__" + "\n"
            + "__#__"
        expect(result).toBe(expectedTree)
    })

    test("should return a string with the tree draw with a heigh of 10", () => {
        const height = 10
        const result = createXmasTree(height)
        const expectedTree = ""
            + "_________*_________" + "\n"
            + "________***________" + "\n"
            + "_______*****_______" + "\n"
            + "______*******______" + "\n"
            + "_____*********_____" + "\n"
            + "____***********____" + "\n"
            + "___*************___" + "\n"
            + "__***************__" + "\n"
            + "_*****************_" + "\n"
            + "*******************" + "\n"
            + "_________#_________" + "\n"
            + "_________#_________"

        expect(result).toBe(expectedTree)
    })

    test("should return a string with the tree draw with a heigh of 80", () => {
        const height = 20
        const result = createXmasTree(height)
        const expectedTree = ""
            + "___________________*___________________" + "\n"
            + "__________________***__________________" + "\n"
            + "_________________*****_________________" + "\n"
            + "________________*******________________" + "\n"
            + "_______________*********_______________" + "\n"
            + "______________***********______________" + "\n"
            + "_____________*************_____________" + "\n"
            + "____________***************____________" + "\n"
            + "___________*****************___________" + "\n"
            + "__________*******************__________" + "\n"
            + "_________*********************_________" + "\n"
            + "________***********************________" + "\n"
            + "_______*************************_______" + "\n"
            + "______***************************______" + "\n"
            + "_____*****************************_____" + "\n"
            + "____*******************************____" + "\n"
            + "___*********************************___" + "\n"
            + "__***********************************__" + "\n"
            + "_*************************************_" + "\n"
            + "***************************************" + "\n"
            + "___________________#___________________" + "\n"
            + "___________________#___________________"

        expect(result).toBe(expectedTree)



    })

})
