// var countSheep = function(num) {
//   let sheep = '';
//
//   for (var i = 0; i < num; i++) {
//     sheep += (i + 1) + ' sheep...';
//   }
//   return sheep;
// };

const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(1)); //1 sheep...
console.log(countSheep(2)); //1 sheep... 2 sheep...
console.log(countSheep(3)); //1 sheep... 2 sheep... 3 sheep...
