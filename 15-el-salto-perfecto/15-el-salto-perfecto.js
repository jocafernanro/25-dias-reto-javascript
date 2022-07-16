function checkSledJump(heights = []) {
    if (!Array.isArray(heights)) return new Error("The param is not an array")
    if (heights.length < 3) return new Error("The array is empty or have less than 3 values")

    const nonStopRising = Math.max(...heights) === heights[heights.length - 1]
    if (nonStopRising) return false

    let previousValue;
    let isRising = true
    let isFalling = false

    return heights.every(height => {
        if (height === previousValue) return false
        if (isRising && height < previousValue) {
            isRising = false
            isFalling = true
        }
        if (isFalling && height > previousValue) return false
        previousValue = height;
        return true
    })
}

module.exports = checkSledJump  