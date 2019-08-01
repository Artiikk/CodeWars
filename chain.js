const chain = (a, b) => (b ? a + b : b => a + b);

console.log(chain(2, 3)); // 6
console.log(chain(2)(3)); // 6
