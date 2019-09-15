function scramble(str1, str2) {
  const stringFirst = [...str1];
  const stringSecond = [...str2];

  stringFirst.forEach(val => {
      if (stringSecond.includes(val)) stringSecond.splice(stringSecond.indexOf(val), 1);
  });

  return stringSecond.length == 0;

  // const dictionary = [...str1];
  // const mainWord = [...str2];
  //
  // return mainWord.every(elem => dictionary.includes(elem));
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
