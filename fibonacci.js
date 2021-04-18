function fib(n) {
  let a = 1; // 1, 2, 3, 5, 8, 13,
  let b = 1; // 2, 3, 5, 8, 13, 21
  for (let i = 3; i <= n; i++) {
    let c = a + b; // 2, 3, 5, 8, 13
    a = b; // 1, 2, 3, 5, 8
    b = c; // 2, 3, 5, 8, 13
  }
  return b; // 13
}

console.log(fib(7)); // 13