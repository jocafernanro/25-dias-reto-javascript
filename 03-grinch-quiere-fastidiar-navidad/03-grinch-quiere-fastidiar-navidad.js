function isValid(letter) {
    const containsBrackets = text => text.match(new RegExp(/\[|\]/g))
    const containsKeys = text => text.match(new RegExp(/\{|\}/g))
    const getOpenParenthesisQuantity = text => text.match(new RegExp(/\(/g)) || []
    const getOpenClosedParenthesisQuantity = text => text.match(new RegExp(/\(.*?[a-z]\)/g)) || []


    if (containsBrackets(letter) || containsKeys(letter)) return false
    if (getOpenParenthesisQuantity(letter)?.length > getOpenClosedParenthesisQuantity(letter)?.length) return false

    return true;
}

module.exports = isValid;

