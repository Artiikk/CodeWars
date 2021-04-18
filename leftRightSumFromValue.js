const getSum = (arr) => arr.reduce((sum, item) => sum + item, 0)

function countValues(arr, val) {
  const valueWanted = arr.findIndex((el) => el === val);
  const leftSum = getSum(arr.slice(0, valueWanted))
  const rightSum = getSum(arr.slice(valueWanted + 1, arr.length))
  return leftSum === rightSum
}

console.log(countValues([1, 2, 3, 2, 1], 3));
