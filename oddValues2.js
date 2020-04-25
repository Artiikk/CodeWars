const array = [ 2, 3, 7, 6, 1, 5, 8, 9 ]
function sortArr(arr) {
  const oddSorted = arr.filter(el => el % 2).sort((a, b) => a - b)
  let i = 0;
  return arr.map(el => el % 2 ? oddSorted[i++] : el)
}

// console.log(sortArr(array)) // [2, 1, 3, 4, 6, 5, 7, 8, 9]