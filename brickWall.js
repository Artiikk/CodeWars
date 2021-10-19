const wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1]
]

function leastBricks(wall) {
  const map = {}

  wall.forEach((brick) => {
    let sum = 0

    for (let i = 0; i < brick.length - 1; i++) {
      sum += brick[i]
      map[sum] = map[sum] ? map[sum] + 1 : 1
    }
  })

  console.log('map', map)

  return wall.length - Math.max(...Object.values(map))
}

console.log(leastBricks(wall))