function bill(number) {

  let newArr = [];
  number = number.split('').reverse();

  for (var i = 0; i < number.length; i++) {
    if (i % 3 === 0 && i !== 0) newArr.push(',');
    newArr.push(number[i]);
  }

  return newArr.reverse().join('');
}

console.log(bill('1000'));
