
function contarOvejas(ovejas) {
  return ovejas.filter(oveja => {
    const isRed = oveja?.color === 'rojo';
    const containsN = oveja?.name.toLowerCase().includes('n');
    const containsA = oveja?.name.toLowerCase().includes('a');
    return isRed && containsN && containsA;
  })
}


module.exports = contarOvejas;