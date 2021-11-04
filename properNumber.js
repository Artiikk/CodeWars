function getProperSum(arr, sum) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    const diff = sum - currentEl;
    
    const currentResult = [currentEl, diff].sort((a, b) => a - b);
    const isDuplicate = JSON.stringify(result).includes(
      JSON.stringify(currentResult)
    );

    if (arr.includes(diff) && !isDuplicate) {
      result.push(currentResult);
    }
  }

  return result;
}

console.log(getProperSum([1, 2, 10, 11], 12));

