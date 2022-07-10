function groupBy(collection, it) {
    const obj = {}

    collection.forEach(item => {
        const key = typeof it === "function" ? it(item) : item[it]
        obj[key] ??= []
        obj[key].push(item)
    })

    return obj
}

module.exports = groupBy