function shouldBuyFidelity(times) {
    const ticketPrice = 12;
    const fidelityCardPrice = 250
    const fidelityDiscount = 0.75;

    const fidelityPrice = (times) => {
        let value = fidelityCardPrice
        for (let i = 1; i <= times; i++) {
            value += ticketPrice * fidelityDiscount ** i
        }
        return value;
    };

    const normalPrice = (times) => times * ticketPrice;

    return fidelityPrice(times) < normalPrice(times);
}

module.exports = shouldBuyFidelity;