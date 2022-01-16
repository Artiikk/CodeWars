function sumNumber(number) {
  let sum = 0;
  const arr = String(number).split('')

  for (let i = 0; i < arr.length; i++) {
    const element = Number(arr[i])
    sum += element;
  }
  return sum;
}

console.log(sumNumber(111)); // 3
console.log(sumNumber(1211)); // 5

// function sumNumber(number) {
//   const strArr = [...String(number)];
//   return strArr.reduce((sum, el) => sum + Number(el), 0);
// }