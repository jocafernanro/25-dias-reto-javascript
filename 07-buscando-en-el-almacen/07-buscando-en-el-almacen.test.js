const contains = require('./07-buscando-en-el-almacen');

describe("when calling contains", () => {
    test("should return true if the product is in the store", () => {
        const almacen = {
            'estanteria1': {
                'cajon1': {
                    'producto1': 'coca-cola',
                    'producto2': 'fanta',
                    'producto3': 'sprite'
                }
            },
            'estanteria2': {
                'cajon1': 'vacio',
                'cajon2': {
                    'producto1': 'pantalones',
                    'producto2': 'camiseta' // <- ¡Está aquí!
                }
            }
        }

        const result = contains(almacen, 'camiseta')
        expect(result).toBe(true);
    })

    test("should return false if the product is not in the store", () => {
        const almacen = {
            'estanteria1': {
                'cajon1': {
                    'producto1': 'coca-cola',
                    'producto2': 'fanta',
                    'producto3': 'sprite'
                }
            },
            'estanteria2': {
                'cajon1': 'vacio',
                'cajon2': {
                    'producto1': 'pantalones',
                    'producto2': 'camiseta'
                }
            }
        }

        const result = contains(almacen, 'gato')
        expect(result).toBe(false);
    })

    test("should return true if another product is in another store", () => {
        const otroAlmacen = {
            'baul': {
                'fondo': {
                    'objeto': 'cd-rom',
                    'otro-objeto': 'disquette',
                    'otra-cosa': 'mando'
                }
            },
            'estanteria': {
                'cajon': {
                    'producto': 'camiseta'
                }
            },
            'otra-estanteria': {
                'arriba': {
                    'seccionIzquierda': {
                        'cajaDeConsolas': {
                            'consola1': 'gameboy',
                            'consola2': 'nintendo-64',
                            'consola3': 'nintendo-switch',
                            'consola4': 'nintendo-wii'
                        }
                    }
                }
            }
        }

        const result = contains(otroAlmacen, 'gameboy')
        expect(result).toBe(true);
    })
})

