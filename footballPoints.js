// function points(games) {
//   let validArr = games.map(item => item.split(':'));
//
//   let counter = 0;
//   validArr.forEach(el => {
//     if (el[0] > el[1]) counter += 3;
//     if (el[0] === el[1]) counter += 1;
//   });
//   return counter;
// }

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)
// if  x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); //30
