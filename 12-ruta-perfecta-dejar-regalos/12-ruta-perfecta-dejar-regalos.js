
function getMinJump (obstacles) {
  if (!Array.isArray(obstacles) || obstacles.length === 0) return "Error: 'obstacles' must be a filled array"
  if (obstacles[0] === 0) return 'Error: an obstacle comes on position 0'

  const maxObstacle = Math.max(...obstacles)
  let obstaculeFound = true
  let jumpSize = 1

  const someObstacleInJumps = (numJumps) => [...Array(numJumps)]
    .map((_, index) => (index + 1) * jumpSize)
    .some((jumpDrop) => obstacles.includes(jumpDrop))

  while (jumpSize < maxObstacle && obstaculeFound) {
    const numJumps = Math.floor(maxObstacle / jumpSize++)
    obstaculeFound = someObstacleInJumps(numJumps)
  }
  return jumpSize
}

module.exports = getMinJump
