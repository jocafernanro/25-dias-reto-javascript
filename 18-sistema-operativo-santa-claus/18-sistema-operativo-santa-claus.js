function fixFiles(files) {
    if (!Array.isArray(files) || files.length < 0) return new Error("Error: files param has to be an array and cannot be empty")

    const filesObj = {}
    return files.map(file => {
        const fileString = (n) => n > 1 ? `(${n - 1})` : ''
        filesObj[file] ??= 0
        filesObj[file]++
        return `${file}${fileString(filesObj[file])}`
    })
}

module.exports = fixFiles