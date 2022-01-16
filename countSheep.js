// function countSheep(sheepNumber) {
//   let sheepStr = "";
//   for (let i = 1; i <= sheepNumber; i++) {
//     sheepStr += i + ' Sheep . . . ';
//   }
//   return sheepStr;
// }

// console.log(countSheep(1)) // 1 sheep...
// console.log(countSheep(2)) // 1 sheep... 2 sheep...
// console.log(countSheep(3)) // 1 sheep... 2 sheep... 3 sheep...

// const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');