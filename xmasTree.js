function xmasTree(input) {
  let startWith = input % 2 === 0 ? 2 : 1;
  let result = [];
  result.push([' ']);

  while (startWith <= input) {
    result.push(Array(startWith).fill('*'));
    startWith += 2;
  }

  return result.map(row => {
    const paddingLeft = (input - row.length)/2 + row.length;
    return row.join('').padStart(paddingLeft);
  }).join('\n');
}


console.log(xmasTree(7));
