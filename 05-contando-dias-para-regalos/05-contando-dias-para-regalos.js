function daysToXmas(date) {
    const XmasDate = new Date('Dec 25, 2021')
    const difference = (XmasDate - date)
    const millisecondsToDays = (1000 * 3600 * 24)
    return Math.ceil(difference / millisecondsToDays);
}


module.exports = daysToXmas;