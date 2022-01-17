// function counter(num) {
//   let strNumb = String(num);
//   let strLength = strNumb.length;

//   for (let i = 0; i < strLength; i++) {
//     if (strNumb % 3 === 0) {
//       return strNumb;
//     } else {
//       strNumb = strNumb.slice(0, -1);
//     }
//   }
//   return Number(strNumb) || null
// }

function counter(n) {
  return n % 3 === 0 ? n : counter(String(n).slice(0, -1) || null)
}

console.log(counter(6));

