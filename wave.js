function wave(str) {
  let newArr = [];

  for (var i = 0; i < str.length; i++) {
    newArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }

  return newArr;
}

console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
