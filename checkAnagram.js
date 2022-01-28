function checkIfAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const word1Arr = word1.toLowerCase().split("");
  word2 = word2.toLowerCase();

  const letterMap = word1Arr.reduce(
    (acc, el) => ({ ...acc, [el]: (acc[el] || 0) + 1 }),
    {}
  );

  for (let i = 0; i < word2.length; i++) {
    const currentLetter = word2[i];

    if (letterMap[currentLetter]) {
      letterMap[currentLetter]--;
    }
  }

  const elementsLeft = Object.values(letterMap).filter(Boolean).length;
  return !elementsLeft;
}

console.log(checkIfAnagram("finder", "Friend"));
console.log(checkIfAnagram("hello", "bye"));
