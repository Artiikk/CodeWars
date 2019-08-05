function moveZeros(array) {

return array.filter(x => x !== 0).concat(array.filter(x => x === 0));
 //  const arrayWithZeros = array.filter(number => number === 0);
 //  const arrayWithoutZeros = array.filter(number => number !== 0);
 //
 // return [...arrayWithoutZeros, ...arrayWithZeros];
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]
