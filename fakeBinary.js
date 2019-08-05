// function fakeBin(x){
//   x = x.replace(/[0-4]/g, '0');
//   x = x.replace(/[5-9]/g, '1');
//   return x;
// }

const fakeBin = x => x.replace(/\d/g, d => d < 5 ? 0 : 1);

console.log(fakeBin('45385593107843568')); //'01011110001100111'
