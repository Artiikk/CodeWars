function calculate(arr) {
  return arr.reduce((sum, element) => {
    if (element > 0 && element % 2 !== 0) {
      return sum + element;
    } else {
      return sum
    }
  }, 0);
}

const calc = (arr) => arr.reduce((sum, el) => el > 0 && (el % 2) ? sum + el : sum);

const example = [5, 0, -5, 20, 88, 17, -32];
console.log(calc(example));
