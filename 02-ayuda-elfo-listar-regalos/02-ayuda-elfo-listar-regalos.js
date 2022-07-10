function listGifts(letter) {
    const obj = {}

    const trimmedLetter = letter.trim()
    const presents = trimmedLetter.split(' ')
    const filteredPresents = presents.filter(present => present[0] !== '_' && present !== '')

    filteredPresents.forEach(present => {
        obj[present] = obj[present] + 1 || 1
    })

    return obj;
}

module.exports = listGifts;