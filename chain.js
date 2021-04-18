const chain = (a, b) => (b ? a + b : b => a + b);

console.log(chain(2, 3)); // 6
console.log(chain(2)(3)); // 6


function sum(number) {
  let sumOfNumbers = number
  console.log(number)

  return function func(nextArg) {
    sumOfNumbers += nextArg
    console.log(sumOfNumbers)
    return func
  };
};
sum(1)(2)(3);
// 1, 3, 6


function sum(number) {
  let sumOfNumbers = 0;

  return (nextNumber) => {
    sumOfNumbers += (number + nextNumber);
    console.log(sumOfNumbers)
    return sum(sumOfNumbers);
    // вызовем sum с новым аргументом и зачейним функцией следующее в начальном вызове
  };
};
sum(1)(2)(3);
// 3, 6


function sum(num){
  sum.total = sum.total || 0;
  sum.total += num;
  console.log(sum.total);
  return sum;
}
// 1, 3, 6


let sumOfNumbers = 0;
function sum(number) {
  return (nextNumber) => {
    sumOfNumbers += (number + nextNumber);
    console.log(sumOfNumbers);
    return sum;
  };
};
console.log(sum(1)(2)(3)(4))
// если в nextNumber не будет след. аргумента, то ничего не произойдет