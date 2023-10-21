const vowelStrings = function (words, left, right) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);

  let count = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i].toLowerCase();
    if (vowelSet.has(word.at(0)) && vowelSet.has(word.at(-1))) {
      count++;
    }
  }

  return count;
};
