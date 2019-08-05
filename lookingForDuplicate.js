function lookForDuplicate(...num) {
  return num.find(el => num.indexOf(el) !== num.lastIndexOf(el));
}

console.log(lookFor(1,2,3,4,5,6,6));
