function wrapGifts (gifts) {
  if (!Array.isArray(gifts)) return new Error('The parameter must be an array')
  if (gifts.length === 0) return []

  const width = Math.max(...gifts.map(gift => gift.split('').reduce( (acc, cur)=> acc + cur.length , 0 ) )) + 2
  const asterisks = '*'.repeat(width)
  const wrappedGifts = [asterisks, ...gifts.map(gift=>`*${gift}*`), asterisks]
  return wrappedGifts
}

module.exports = wrapGifts
