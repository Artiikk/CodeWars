let inc = (function () {
  let counter = 1;

  return function () {
    return counter++;
  };
})();

console.log(inc()); // 1
console.log(inc()); // 2