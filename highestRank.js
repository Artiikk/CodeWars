function highestRank(arr) {
  const objValues = arr.reduce((acc, el) => {
    acc[el] = acc[el] ? (acc[el] += 1) : 1;
    return acc;
  }, {});
  const sortedValues = Object.entries(objValues).sort((a, b) => a[1] - b[1]);
  return Number(sortedValues[sortedValues.length - 1][0]);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
