function solve(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const alphabetObj = alphabet.reduce(function(acc, cur, i) {
    acc[cur] = i + 1;
    return acc;
  }, {});

  const notConsonant = s.split(/a|i|o|u|e/g);
  const values = notConsonant.map(el => [...el].map(item => alphabetObj[item]));
  const summedValues = values.map(el => el.reduce((sum, value) => sum + value, 0));

  return Math.max(...summedValues)
};

console.log(solve('string'))
