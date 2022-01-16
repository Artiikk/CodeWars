function sentenceSmash(array) {
 let arrTosrt = array.join(' ');
  return arrTosrt;
}

const arr = ['hello', 'world', 'this', 'is', 'great']

console.log(sentenceSmash(arr)) // `hello world this is great`