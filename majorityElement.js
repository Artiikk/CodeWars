function majorityElement(nums) {
  const frequencyMap = nums.reduce((acc, item) => {
    acc[item] ? acc[item]++ : (acc[item] = 1);
    return acc;
  }, {});

  const frequencyArr = Object.entries(frequencyMap);
  const sortedFrequencyArr = frequencyArr.sort((a, b) => a[1] - b[1]);

  const [majorityEl] = sortedFrequencyArr.at(-1);

  return Number(majorityEl);
}

console.log(majorityElement([3, 2, 3])); // returns 3
