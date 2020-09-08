
// const cycleChecker = (iterationNumber, arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (num === arr[iterationNumber] + arr[i + 1]) {
//       return true;
//     }
//   }
// };

function check(arr, num) {
  // while (iterationNumber <= arr.length) {
  //   const checker = cycleChecker(iterationNumber, arr, num);
  //   if (checker) return true;
  //   else iterationNumber++;
  // }
  // return false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] + arr[j] === num) return true;
    }
  }
  return false;
}

console.log(check([15, 15, 10, 7], 17));
console.log(check([10, 2, 3, 11, 2], 20));