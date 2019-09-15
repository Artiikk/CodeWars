function monkeyCount(n) {
  let cage = [];

  for (var i = 0; i < n; i++) {
    cage.push(i + 1);
  }
  return cage;
}

 console.log(monkeyCount(9));
 console.log(monkeyCount(3));
