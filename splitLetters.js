function solution(str) {
  str = str.length % 2 === 0 ? str : str + "_";
  return str.match(/.{1,2}/g);
}

console.log(solution("abc")); // should return ['ab', 'c_']
console.log(solution("abcdef")); // should return ['ab', 'cd', 'ef']
