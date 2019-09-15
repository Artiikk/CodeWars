function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return n ? Array(n).fill(v) : [];
}

console.log(prefill(3,1)) // [1,1,1]
console.log(prefill(2,'abc')) //['abc','abc']
console.log(prefill('1',1)) //[1]
console.log(prefill(3, prefill(2,'2d'))) // [['2d','2d'],['2d','2d'],['2d','2d']])

  // function prefill(n, v) {
    //   const arr = [`${v},`.repeat(n)].join(',').split(',');
    //   const spliced = arr.splice(0, arr.length - 1);
    //   return spliced;
    // }
