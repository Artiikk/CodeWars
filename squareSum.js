const squareSum = numbers => numbers.reduce((el, next) => (next**2) + el, 0);

console.log(squareSum([1, 2])); //5
console.log(squareSum([0, 3, 4, 5])); //50
console.log(squareSum([5, 4, 5])); //66
