function contains(store, product) {
  for (let key in store) {
    if (typeof store[key] === 'object') {
      if (contains(store[key], product)) {
        return true;
      }
    } else if (store[key] === product) {
      return true;
    }
  }
  return false
}

module.exports = contains;