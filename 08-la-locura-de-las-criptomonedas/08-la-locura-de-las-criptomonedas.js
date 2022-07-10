function maxProfit(prices) {
    let maxBenefit = -1

    prices.forEach((price, index) => {
        if (index >= prices.length - 1) return
        const maxValue = Math.max(...prices.slice(index + 1, prices.length))

        if (maxValue <= price) return
        const benefits = maxValue - price
        maxBenefit = benefits > maxBenefit ? benefits : maxBenefit
    })
    return maxBenefit
}

module.exports = maxProfit
