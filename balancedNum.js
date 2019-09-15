function balancedNum(number) {
  number = [...String(number)];
  if (number.length <= 2) return 'Balanced';
  const middle = Math.floor(number.length / 2);
  const parsedMiddle = number.length % 2 === 0 ? (middle - 1) : middle;

  let [leftSide, rightSide] = [number.slice(0, parsedMiddle), number.slice(-parsedMiddle)];
  leftSide = leftSide.reduce((el, next) => el + Number(next), 0);
  rightSide = rightSide.reduce((el, next) => el + Number(next), 0);

  return leftSide === rightSide ? 'Balanced' : 'Not Balanced';
}

console.log(balancedNum(443344));
console.log(balancedNum(7));
console.log(balancedNum(959));
console.log(balancedNum(13));
console.log(balancedNum(432));
console.log(balancedNum(424));
console.log(balancedNum(45245));
