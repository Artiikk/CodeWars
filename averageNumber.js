function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((el, next) => (el + next),0)/classPoints.length) <= yourPoints;
}

console.log(betterThanAverage([2, 3, 4, 5, 1, 1], 5));
